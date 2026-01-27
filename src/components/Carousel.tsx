import { classNames } from 'cpts-javascript-utilities';
import { useCallback, useEffect, useRef, useState, type FC } from 'preact/compat';
import type { ACF_Image } from '../types/types';
import { usePrevious } from '../hooks/usePrevious';
import type { MutableRef } from 'preact/hooks';

const CAROUSEL_INTERVAL_MS = 5000 as const;

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

    const runSetInterval_Cb = useCallback(
        (callback: () => unknown, runInstantly = false) => {
            cancelInterval(intervalId_Ref);

            if (runInstantly) {
                setTransitionLength(150);
                callback();
            } else {
                setTransitionLength(intervalLength);
                const newIntervalId = setInterval(callback, intervalLength);
                intervalId_Ref.current = newIntervalId;
            }
        },
        [intervalLength],
    );

    const startMovement_Cb = useCallback(
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

    return (
        <div className="flex size-full flex-col items-center justify-between gap-y-1">
            {/* Carousel */}
            <div className="relative h-full w-full overflow-hidden">
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
                    {Array.from({ length: slotCount }).map((_, idx) => {
                        const slotIndex = idx - 1;
                        const imgIndex = wrapNumber(currentImageIndex + slotIndex, images.length);
                        const imgSize = displayCount === 1 ? images[imgIndex].sizes.large : images[imgIndex].sizes.medium;

                        return (
                            <div
                                key={idx}
                                className="relative bg-cover bg-center after:absolute after:top-0 after:left-12 after:size-full after:translate-y-[calc(100%---spacing(18))] after:text-neutral-700 after:content-[attr(data-description)]"
                                style={{
                                    width: `${slotWidth}%`,
                                    backgroundImage: `url(${imgSize})`,
                                }}
                                data-description={images[imgIndex].beschreibung}
                            />
                        );
                    })}
                </div>

                {/* 'Chips' */}
                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-row items-end justify-between gap-x-2">
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
                            runSetInterval_Cb(() => startMovement_Cb('backward'), true);
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
                            runSetInterval_Cb(() => startMovement_Cb('forward'), true);
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
            startMovement_Cb('forward');
        } else if (diff < -5) {
            startMovement_Cb('backward');
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
