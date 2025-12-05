import { useEffect, useMemo, useRef, useState, type Dispatch, type StateUpdater } from 'preact/hooks';
import { classNames } from 'cpts-javascript-utilities';

const Carousel = ({
    images,
    visibleItemsCount = 1,
    isInfinite = true,
    withIndicator = true,
}: {
    images: string[];
    visibleItemsCount?: number;
    isInfinite?: boolean;
    withIndicator?: boolean;
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
    const extraPreviousImages = useMemo(() => {
        const output = [];
        for (let index = 0; index < visibleItemsCount; index++) {
            output.push(
                <ImageWrapper
                    key={images[images.length - 1 - index] + index}
                    src={images[images.length - 1 - index]}
                    visibleItemsCount={visibleItemsCount}
                    imageIndex={images.length - 1 - index}
                    currentIndex={currentIndex}
                />,
            );
        }
        output.reverse();
        return output;
    }, [images, currentIndex, visibleItemsCount]);

    // next images after the last item
    const extraNextImages = useMemo(() => {
        const output = [];
        for (let index = 0; index < visibleItemsCount; index++) {
            output.push(
                <ImageWrapper
                    key={images[index] + index}
                    src={images[index]}
                    visibleItemsCount={visibleItemsCount}
                    imageIndex={index}
                    currentIndex={currentIndex}
                />,
            );
        }
        return output;
    }, [images, currentIndex, visibleItemsCount]);

    return (
        <div className="relative flex h-full w-full flex-col overflow-hidden">
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
                className={classNames('flex h-full transition-transform duration-300', !isTransitionEnabled && 'transition-none')}
                style={{
                    transform: `translateX(-${currentIndex * (100 / visibleItemsCount)}%)`,
                }}
                onTransitionEnd={handleTransitionEnd}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {isRepeating && extraPreviousImages}
                {images.map((url, idx) => (
                    <ImageWrapper key={url + idx} src={url} visibleItemsCount={visibleItemsCount} imageIndex={idx} currentIndex={currentIndex} />
                ))}
                {isRepeating && extraNextImages}
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

const ImageWrapper = ({
    src,
    visibleItemsCount,
    imageIndex,
    currentIndex,
}: {
    src: string;
    visibleItemsCount: number;
    imageIndex: number;
    currentIndex: number;
}) => {
    return (
        <div
            className={classNames(
                'border-neutral-40 relative shrink-0',
                (currentIndex - imageIndex) % 2 === 0 ? '[clip-path:inset(0px_var(--content-card-padding))]' : '[clip-path:inset(0px_0px)]',
            )}
            key={src + imageIndex}
            style={{
                width: `calc(100% / ${visibleItemsCount})`,
            }}
        >
            <img src={src} alt={`slider ${imageIndex + 1}`} className="size-full object-cover" />
        </div>
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
                className = 'w-3 h-1.5 bg-black shrink-0 grow ml-1.5 rounded-xl transition-[margin-left,width,height] first-of-type:ml-0 cursor-pointer';
            } else if (calculatedActiveIndex === 0) {
                if (calculatedActiveIndex + index <= 2) {
                    className =
                        'ml-1.5 rounded-xl transition-[margin-left,width,height] first-of-type:ml-0 size-1.5 bg-neutral-900 shrink-0 grow cursor-pointer';
                } else {
                    className =
                        'ml-1.5 rounded-xl transition-[margin-left,width,height] first-of-type:ml-0 my-px bg-neutral-900 shrink-0 grow size-1 cursor-pointer';
                }
            } else if (calculatedActiveIndex === localLength - 1) {
                if (Math.abs(calculatedActiveIndex - index) <= 2) {
                    className =
                        'ml-1.5 rounded-xl transition-[margin-left,width,height] first-of-type:ml-0 size-1.5 bg-neutral-900 shrink-0 grow cursor-pointer';
                } else {
                    className =
                        'ml-1.5 rounded-xl transition-[margin-left,width,height] first-of-type:ml-0 my-px bg-neutral-900 shrink-0 grow size-1 cursor-pointer';
                }
            } else if (Math.abs(calculatedActiveIndex - index) === 1) {
                className = 'ml-1.5 rounded-xl transition-[margin-left,width,height] first-of-type:ml-0 size-1.5 bg-neutral-900 shrink-0 grow cursor-pointer';
            } else {
                className =
                    'ml-1.5 rounded-xl transition-[margin-left,width,height] first-of-type:ml-0 my-px bg-neutral-900 shrink-0 grow size-1 cursor-pointer';
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

export default Carousel;
