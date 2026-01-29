import { classNames } from 'cpts-javascript-utilities';
import { useCallback, useEffect, useMemo, useRef, useState, type FC } from 'preact/compat';
import type { ACF_Image, ACF_Media_Sizes } from '../types/types';
import { usePrevious } from '../hooks/usePrevious';
import type { MutableRef } from 'preact/hooks';
import { useWordpressImageBackground } from '../hooks/useWordpressImageBackground';

const CAROUSEL_INTERVAL_MS = 10000 as const;

const Carousel: FC<{ images: ACF_Image[]; displayCount?: number; showMenu?: boolean }> = ({ images, displayCount = 1, showMenu = true }) => {
    const slotCount = displayCount + 2;
    const slotWidth = 100 / displayCount;
    const trackWidth = slotCount * slotWidth;

    const intervalLength = CAROUSEL_INTERVAL_MS / (0.5 * displayCount + 0.5);
    const intervalLengthPrevious = usePrevious(intervalLength);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [movementOffset, setMovementOffset] = useState(0);
    const [transitionLength, setTransitionLength] = useState(intervalLength);
    const [isPaused, setIsPaused] = useState(false);
    const [touchPosition, setTouchPosition] = useState<number | null>(null);
    const intervalId_Ref = useRef<number | null>(null);

    const carouselImagesSlotIndices_Memo = useMemo(
        () =>
            Array.from({ length: slotCount }).map((_, idx) => {
                const slotIndex = idx - 1;
                return slotIndex;
            }),
        [slotCount],
    );

    const runSetInterval_Cb = useCallback(
        (callback: () => unknown, runInstantly = false) => {
            cancelInterval(intervalId_Ref);

            if (runInstantly) {
                setTransitionLength(100);
                callback();
            } else {
                setTransitionLength(intervalLength);
                const newIntervalId = setInterval(callback, intervalLength);
                intervalId_Ref.current = newIntervalId;
            }
        },
        [intervalLength],
    );

    const manuallyStartMovement_Cb = useCallback(
        (direction: 'forward' | 'backward') => {
            setCurrentImageIndex((oldIndex) => wrapNumber(oldIndex + movementOffset, images.length));
            setMovementOffset(direction === 'forward' ? 1 : -1);
        },
        [images.length, movementOffset],
    );

    const commitMovement_Cb = useCallback(() => {
        if (movementOffset === 0) return;
        setCurrentImageIndex((oldIndex) => wrapNumber(oldIndex + movementOffset, images.length));
        setMovementOffset(0);
    }, [movementOffset, images.length]);

    useEffect(() => {
        if (isPaused) {
            cancelInterval(intervalId_Ref);
            commitMovement_Cb();
        } else if (movementOffset === 0 || intervalLength !== intervalLengthPrevious) {
            runSetInterval_Cb(() => setMovementOffset(1));
        }
    }, [commitMovement_Cb, intervalLength, intervalLengthPrevious, isPaused, movementOffset, runSetInterval_Cb]);

    const { ref: size_Ref, sizeValue } = useWordpressImageBackground<HTMLDivElement>(displayCount);

    return (
        <div className="flex size-full flex-col items-center justify-between gap-y-1">
            {/* Carousel */}
            <div ref={size_Ref} className="relative h-full w-full overflow-hidden">
                <div
                    className="flex h-full transition-transform will-change-transform"
                    style={{
                        width: `${trackWidth}%`,
                        transform: `translateX(${(-(movementOffset + 1) * 100) / slotCount}%)`,
                        transitionDuration: movementOffset !== 0 ? `${transitionLength}ms` : '0ms',
                    }}
                    onTransitionEnd={handleTransitionEnd}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    {carouselImagesSlotIndices_Memo.map((slotIndex) => {
                        const imgIndex = wrapNumber(currentImageIndex + slotIndex, images.length);
                        return <CarouselImage key={slotIndex} sizeValue={sizeValue} image={images[imgIndex]} imageWidthPercentage={slotWidth} />;
                    })}
                </div>

                {/* 'Chips' */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-row items-end justify-between gap-x-2">
                    {images.map((iSrc, idx) => (
                        <div
                            key={`dot ${iSrc} ${idx}`}
                            className={classNames(
                                'aspect-4/1 w-6 rounded-full outline -outline-offset-1 outline-neutral-200 transition-[background-color]',
                                idx === currentImageIndex ? 'bg-neutral-200' : 'bg-transparent',
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* Buttons */}
            {showMenu && (
                <div className="flex items-center justify-between gap-x-2">
                    {/* Backward */}
                    <button
                        className="group size-6 cursor-pointer rounded-full bg-neutral-200 p-1.5"
                        onClick={() => {
                            runSetInterval_Cb(() => manuallyStartMovement_Cb('backward'), true);
                        }}
                    >
                        <div className='size-full bg-theme-text/50 transition-[background-color] duration-100 [mask:url("/svg/ChevronLeftOutline.svg")] group-hover:bg-theme-text group-active:bg-theme-text' />
                    </button>

                    {/* Pause  */}
                    <button className="group size-6 cursor-pointer rounded-full bg-neutral-200 p-1.5" onClick={() => setIsPaused((old) => !old)}>
                        {isPaused ? (
                            <div className='size-full translate-x-px bg-theme-text/50 [mask:url("/svg/PlayOutline.svg")] group-hover:bg-theme-text group-active:bg-theme-text' />
                        ) : (
                            <div className='size-full bg-theme-text/50 transition-[background-color] duration-100 [mask:url("/svg/PauseOutline.svg")] group-hover:bg-theme-text group-active:bg-theme-text' />
                        )}
                    </button>

                    {/* Forward */}
                    <button
                        className="group size-6 cursor-pointer rounded-full bg-neutral-200 p-1.5"
                        onClick={() => {
                            runSetInterval_Cb(() => manuallyStartMovement_Cb('forward'), true);
                        }}
                    >
                        <div className='size-full bg-theme-text/50 transition-[background-color] duration-100 [mask:url("/svg/ChevronRightOutline.svg")] group-hover:bg-theme-text group-active:bg-theme-text' />
                    </button>
                </div>
            )}
        </div>
    );

    function handleTransitionEnd(ev: TransitionEvent) {
        if (ev.target === ev.currentTarget) {
            commitMovement_Cb();
        }
    }

    function handleTouchStart(ev: TouchEvent) {
        // Save the first position of the touch
        const touchDown = ev.touches[0].clientX;
        cancelInterval(intervalId_Ref);
        setTouchPosition(touchDown);
    }

    function handleTouchMove(ev: TouchEvent) {
        if (touchPosition === null) {
            return;
        }
        const currentTouchPosition = ev.touches[0].clientX;
        const diff = touchPosition - currentTouchPosition;

        if (diff > 5) {
            manuallyStartMovement_Cb('forward');
        } else if (diff < -5) {
            manuallyStartMovement_Cb('backward');
        }

        cancelInterval(intervalId_Ref);
        // reset
        setTouchPosition(null);
    }
};

export default Carousel;

function wrapNumber(num: number, wrapAt: number) {
    return ((num % wrapAt) + wrapAt) % wrapAt;
}

function cancelInterval(idRef: MutableRef<number | null>) {
    if (idRef.current) {
        clearInterval(idRef.current);
    }
    idRef.current = null;
}

const CarouselImage = ({
    image,
    sizeValue,
    imageWidthPercentage,
}: {
    image: ACF_Image;
    sizeValue: keyof ACF_Media_Sizes | 'full';
    imageWidthPercentage: number;
}) => {
    const imageSource = sizeValue === 'full' ? image.url : image.sizes[sizeValue];

    return (
        <a
            href={image.url}
            target="_blank"
            rel="noreferrer"
            className="relative block bg-cover bg-center no-underline"
            style={{
                width: `${imageWidthPercentage}%`,
                backgroundImage: `url("${imageSource}")`,
            }}
        >
            <span className="absolute bottom-12 left-12 bg-neutral-300/50 px-1 py-0.5">{image.beschreibung}</span>
        </a>
    );
};
