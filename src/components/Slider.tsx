import { useEffect, useMemo, useRef, useState, type Dispatch, type StateUpdater } from 'preact/hooks';
import { classNames } from 'cpts-javascript-utilities';

const Carousel = ({
    images,
    visibleItemsCount = 1,
    isInfinite = true,
    withIndicator = true,
    square = false,
}: {
    images: string[];
    visibleItemsCount?: number;
    isInfinite?: boolean;
    withIndicator?: boolean;
    square?: boolean;
}) => {
    const isRepeating = isInfinite && images.length > visibleItemsCount;

    const currentIndexState = useState(isRepeating ? visibleItemsCount : 0),
        [currentIndex, setCurrentIndex] = currentIndexState;
    const timeoutInProgressState = useState(false),
        [, setTimeoutInProgress] = timeoutInProgressState;
    const [isTransitionEnabled, setTransitionEnabled] = useState(true);
    const [touchPosition, setTouchPosition] = useState<number | null>(null);

    const isNextButtonVisible = isRepeating || currentIndex < images.length - visibleItemsCount;
    const isPrevButtonVisible = isRepeating || currentIndex > 0;

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === visibleItemsCount || currentIndex === images.length) {
                setTransitionEnabled(true);
            }
        }
    }, [currentIndex, isRepeating, visibleItemsCount, images.length]);

    // previous images before the first item
    const extraPreviousItems = useMemo(() => {
        const output = [];
        for (let index = 0; index < visibleItemsCount; index++) {
            output.push(
                <img
                    src={images[images.length - 1 - index]}
                    alt={`slider ${index + 1}`}
                    className={classNames('shrink-0 grow object-cover', square && 'aspect-square')}
                    style={{ width: `calc(100% / ${visibleItemsCount})` }}
                />,
            );
        }
        output.reverse();
        return output;
    }, [images, square, visibleItemsCount]);

    // next images after the last item
    const extraNextItems = useMemo(() => {
        const output = [];
        for (let index = 0; index < visibleItemsCount; index++) {
            output.push(
                <img
                    src={images[index]}
                    alt={`slider ${index + 1}`}
                    className={classNames('shrink-0 grow object-cover', square && 'aspect-square')}
                    style={{ width: `calc(100% / ${visibleItemsCount})` }}
                />,
            );
        }
        return output;
    }, [images, square, visibleItemsCount]);

    return (
        <div className="flex h-[inherit] w-full flex-col">
            <div className="relative flex min-h-full w-full overflow-hidden">
                {isPrevButtonVisible ? (
                    <DirectionalButton
                        previous
                        length={images.length}
                        isRepeating={isRepeating}
                        visibleItemsCount={visibleItemsCount}
                        currentIndexState={currentIndexState}
                        timeoutInProgressState={timeoutInProgressState}
                    />
                ) : null}

                {/* <div className="w-full overflow-hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}> */}
                <div
                    className={classNames('flex transition-all', !isTransitionEnabled && 'transition-none')}
                    style={{
                        transform: `translateX(-${currentIndex * (100 / visibleItemsCount)}%)`,
                    }}
                    onTransitionEnd={() => handleTransitionEnd()}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    {isRepeating && extraPreviousItems}
                    {images.map((url, idx) => (
                        <img
                            key={url + idx}
                            src={url}
                            alt={`slider ${idx + 1}`}
                            className={classNames('shrink-0 grow object-cover', square && 'aspect-square')}
                            style={{ width: `calc(100% / ${visibleItemsCount})` }}
                        />
                    ))}
                    {isRepeating && extraNextItems}
                </div>
                {/* </div> */}

                {isNextButtonVisible ? (
                    <DirectionalButton
                        length={images.length}
                        isRepeating={isRepeating}
                        visibleItemsCount={visibleItemsCount}
                        currentIndexState={currentIndexState}
                        timeoutInProgressState={timeoutInProgressState}
                    />
                ) : null}
            </div>

            {withIndicator && <RenderDots length={images.length} currentIndex={currentIndex} isRepeating={isRepeating} visibleItemsCount={visibleItemsCount} />}
        </div>
    );

    function handleTouchStart(ev: TouchEvent) {
        // Save the first position of the touch
        const touchDown = ev.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    function handleTouchMove(ev: TouchEvent) {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = ev.touches[0].clientX;

        // get diff between previous and current position
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            nextItem(isRepeating, visibleItemsCount, currentIndexState, setTimeoutInProgress, length);
        } else if (diff < -5) {
            previousItem(isRepeating, visibleItemsCount, currentIndexState, setTimeoutInProgress);
        }

        // reset
        setTouchPosition(null);
    }

    function handleTransitionEnd() {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false);
                setCurrentIndex(images.length);
            } else if (currentIndex === images.length + visibleItemsCount) {
                setTransitionEnabled(false);
                setCurrentIndex(visibleItemsCount);
            }
        }

        setTimeoutInProgress(false);
    }
};

const DirectionalButton = ({
    previous = false,
    length,
    isRepeating,
    visibleItemsCount,
    currentIndexState,
    timeoutInProgressState,
}: {
    previous?: boolean;
    length: number;
    isRepeating: boolean;
    visibleItemsCount: number;
    currentIndexState: [number, Dispatch<StateUpdater<number>>];
    timeoutInProgressState: [boolean, Dispatch<StateUpdater<boolean>>];
}) => {
    const [timeoutInProgress, setTimeoutInProgress] = timeoutInProgressState;

    return (
        <button
            disabled={timeoutInProgress}
            onClick={
                previous
                    ? () => previousItem(isRepeating, visibleItemsCount, currentIndexState, setTimeoutInProgress)
                    : () => nextItem(isRepeating, visibleItemsCount, currentIndexState, setTimeoutInProgress, length)
            }
            className={classNames(
                'absolute top-1/2 z-10 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-3xl border border-neutral-300 bg-white shadow-sm hover:bg-neutral-300 focus:outline-0',
                previous ? 'left-6' : 'right-6',
                timeoutInProgress ? 'pointer-events-none cursor-not-allowed' : 'pointer-events-auto cursor-pointer',
            )}
        >
            <span
                className={classNames(
                    'block size-0 border-t-8 border-b-8 border-transparent',
                    previous ? '-translate-x-1/4 border-r-10 border-l-5 border-r-neutral-700' : 'translate-x-1/4 border-r-5 border-l-10 border-l-neutral-700',
                )}
            />
        </button>
    );
};

const RenderDots = ({
    length,
    currentIndex,
    isRepeating,
    visibleItemsCount,
}: {
    length: number;
    currentIndex: number;
    isRepeating: boolean;
    visibleItemsCount: number;
}) => {
    const indicatorContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const active = indicatorContainerRef.current?.querySelector('.dots-active');
        if (active) {
            const index = active.getAttribute('data-index');
            if (index !== null && indicatorContainerRef.current?.scrollTo) {
                indicatorContainerRef.current?.scrollTo({
                    left: ((Number(index) - 2) / 5) * 50,
                    behavior: 'smooth',
                });
            }
        }
    }, [currentIndex]);

    // render n (n being the count of original images / visibleItemsCount) dots
    const renderDots = useMemo(() => {
        const output = [];

        const localShow = isRepeating ? visibleItemsCount : 0;
        const localLength = isRepeating ? length : Math.ceil(length / visibleItemsCount);
        const calculatedActiveIndex = currentIndex - localShow < 0 ? length + (currentIndex - localShow) : currentIndex - localShow;

        for (let index = 0; index < localLength; index++) {
            let className = '';
            if (calculatedActiveIndex === index) {
                className = 'w-3 h-1.5 bg-black shrink-0 grow ml-1.5 rounded-xl transition-all first-of-type:ml-0 cursor-pointer';
            } else if (calculatedActiveIndex === 0) {
                if (calculatedActiveIndex + index <= 2) {
                    className = 'ml-1.5 rounded-xl transition-all first-of-type:ml-0 size-1.5 bg-neutral-900 shrink-0 grow cursor-pointer';
                } else {
                    className = 'ml-1.5 rounded-xl transition-all first-of-type:ml-0 my-px bg-neutral-900 shrink-0 grow size-1 cursor-pointer';
                }
            } else if (calculatedActiveIndex === localLength - 1) {
                if (Math.abs(calculatedActiveIndex - index) <= 2) {
                    className = 'ml-1.5 rounded-xl transition-all first-of-type:ml-0 size-1.5 bg-neutral-900 shrink-0 grow cursor-pointer';
                } else {
                    className = 'ml-1.5 rounded-xl transition-all first-of-type:ml-0 my-px bg-neutral-900 shrink-0 grow size-1 cursor-pointer';
                }
            } else if (Math.abs(calculatedActiveIndex - index) === 1) {
                className = 'ml-1.5 rounded-xl transition-all first-of-type:ml-0 size-1.5 bg-neutral-900 shrink-0 grow cursor-pointer';
            } else {
                className = 'ml-1.5 rounded-xl transition-all first-of-type:ml-0 my-px bg-neutral-900 shrink-0 grow size-1 cursor-pointer';
            }
            output.push(<div key={index} data-index={index} className={className} />);
        }

        return output;
    }, [currentIndex, isRepeating, length, visibleItemsCount]);

    return (
        <div
            ref={indicatorContainerRef}
            className="absolute bottom-0 left-1/2 z-10 m-1.5 mx-auto flex max-w-24 -translate-x-1/2 flex-row items-center justify-center overflow-auto rounded-sm bg-neutral-700 px-2 py-1.5"
        >
            {renderDots}
        </div>
    );
};

function nextItem(
    isRepeating: boolean,
    visibleItemsCount: number,
    currentIndexState: [number, Dispatch<StateUpdater<number>>],
    setTimeoutInProgress: Dispatch<StateUpdater<boolean>>,
    length: number,
) {
    const [currentIndex, setCurrentIndex] = currentIndexState;

    const isOnEdgeForward = currentIndex > length;
    if (isOnEdgeForward) {
        setTimeoutInProgress(true);
    }

    if (isRepeating || currentIndex < length - visibleItemsCount) {
        setCurrentIndex((prevState) => prevState + 1);
    }
}

function previousItem(
    isRepeating: boolean,
    visibleItemsCount: number,
    currentIndexState: [number, Dispatch<StateUpdater<number>>],
    setTimeoutInProgress: Dispatch<StateUpdater<boolean>>,
) {
    const [currentIndex, setCurrentIndex] = currentIndexState;

    const isOnEdgeBack = isRepeating ? currentIndex <= visibleItemsCount : currentIndex === 0;

    if (isOnEdgeBack) {
        setTimeoutInProgress(true);
    }

    if (isRepeating || currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1);
    }
}

const _StyledCarousel = ` 
    .carousel-content {
       -ms-overflow-style: none;
        /* hide scrollbar in IE and Edge */
        scrollbar-width: none;
        /* hide scrollbar in Firefox */
    }

    /* hide scrollbar in webkit browser */

    .carousel-content::-webkit-scrollbar,
    .carousel-content::-webkit-scrollbar {
        display: none;
    }

    .carousel-content > * {
        flex-shrink: 0;
        flex-grow: 1;
        width:  calc(100% / visibleItemsCount);
    }

    .left-arrow-button,
    .right-arrow-button {
        position: absolute;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
        width: 48px;
        height: 48px;
        border-radius: 24px;
        background-color: white;
        border: 1px solid #ddd;
        cursor: pointer;
        display: flex;
        align-images: center;
        justify-content: center;
        box-shadow:
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
            rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
        transition: all 150ms linear;
    }

    .left-arrow-button:hover,
    .right-arrow-button:hover {
        background-color: #ddd;
    }

    .left-arrow-button:focus,
    .right-arrow-button:focus {
        outline: none;
    }

    .left-arrow-button {
        left: 24px;
    }

    .right-arrow-button {
        right: 24px;
    }

    .left-arrow {
        display: block;
        width: 0;
        height: 0;
        border-top: 7.5px solid transparent;
        border-bottom: 7.5px solid transparent;
        border-right: 10px solid #484848;
        border-left: 5px solid transparent;
        transform: translateX(-25%);
    }

    .right-arrow {
        display: block;
        width: 0;
        height: 0;
        border-top: 7.5px solid transparent;
        border-bottom: 7.5px solid transparent;
        border-left: 10px solid #484848;
        border-right: 5px solid transparent;
        transform: translateX(25%);
    }

    @media (hover: none) and (pointer: coarse) {
        .left-arrow-button,
        .right-arrow-button {
            display: none;
        }
    }

    .indicator-container {
        display: flex;
        flex-direction: row;
        align-images: center;
        margin: 0 auto;
        -ms-overflow-style: none;
        /* hide scrollbar in IE and Edge */
        scrollbar-width: none;
        /* hide scrollbar in Firefox */
    }

    .indicator-container::-webkit-scrollbar,
    .indicator-container::-webkit-scrollbar {
        display: none;
    }

    .indicator-container {
        max-width: 56px;
        overflow: auto;
    }

    .indicator-container > * {
        margin-left: 6px;
        border-radius: 12px;
        transition-property: all;
        transition-duration: 250ms;
        transition-timing-function: linear;
    }

    .indicator-container > div:first-child {
        margin-left: 0px;
    }

    .indicator-container > .dots-active {
        width: 12px;
        height: 6px;
        background-color: #00000096;
        flex-shrink: 0;
        flex-grow: 1;
    }

    .indicator-container > .dots-close {
        width: 6px;
        height: 6px;
        background-color: #00000033;
        flex-shrink: 0;
        flex-grow: 1;
    }

    .indicator-container > .dots-far {
        width: 4px;
        height: 4px;
        margin-top: 1px;
        margin-bottom: 1px;
        background-color: #00000033;
        flex-shrink: 0;
        flex-grow: 1;
    }
`;
export default Carousel;
