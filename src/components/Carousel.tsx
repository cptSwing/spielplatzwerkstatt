import { classNames } from 'cpts-javascript-utilities';
import type { TargetedTransitionEvent } from 'preact';
import { Fragment, useCallback, useEffect, useState, type FC } from 'preact/compat';

const CAROUSEL_TIMEOUT_MS = 5000 as const;

type DirectionType = 'forward' | 'backward' | 'paused';

const Carousel: FC<{ imageSources: string[]; displayCount?: number }> = ({ imageSources, displayCount = 1 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);
    const [duration, setDuration] = useState(1000);

    const moveImages_Cb = useCallback(
        (direction: DirectionType) => {
            setIsTransitioning(true);
            setCurrentImageIndex((old) => wrapNumber(old + (direction === 'forward' ? 1 : -1), imageSources.length));

            setTimeoutId(
                doSetTimeouts(() => {
                    setDuration(1000);
                    moveImages_Cb('forward');
                }),
            );
        },
        [imageSources.length],
    );

    const paddedImageSources = padArray<string>(imageSources, currentImageIndex, displayCount);

    // Get the ball rollin'
    useEffect(() => {
        setTimeoutId(doSetTimeouts(() => moveImages_Cb('forward')));
    }, [moveImages_Cb]);

    useEffect(() => {
        return () => {
            timeoutId !== null && clearTimeout(timeoutId);
        };
    }, [timeoutId]);

    return (
        <div className="size-full">
            <div className="absolute bottom-6 z-10 flex w-full items-center justify-between">
                <button
                    className="flex translate-x-6 cursor-pointer items-center justify-center rounded-xs rounded-l-md bg-white p-(--content-card-padding)"
                    onClick={() => {
                        if (!isTransitioning) {
                            timeoutId !== null && clearTimeout(timeoutId);
                            setDuration(200);
                            moveImages_Cb('backward');
                        }
                    }}
                >
                    <div className="size-3 bg-theme-primary [clip-path:polygon(0%_50%,100%_0%,100%_100%)]" />
                </button>

                <div className="relative">
                    <div className="flex size-fit justify-between gap-2">
                        {imageSources.map((iSrc, idx) => (
                            <button
                                key={`dot ${iSrc} ${idx}`}
                                className={classNames('h-1.5 w-8 rounded-xs', idx === currentImageIndex ? 'bg-white/80' : 'bg-neutral-400/80')}
                            />
                        ))}
                    </div>

                    <button
                        className="absolute top-full left-8 z-20 cursor-pointer bg-red-200 px-2 py-1 disabled:bg-red-200/10"
                        disabled={true}
                        onClick={() => {
                            if (timeoutId !== null) {
                                clearTimeout(timeoutId);
                                setTimeoutId(null);
                            } else {
                                moveImages_Cb('forward');
                            }
                        }}
                    >
                        {timeoutId !== null ? 'Pause' : 'Unpause'}
                    </button>
                </div>

                <button
                    className="flex -translate-x-6 cursor-pointer items-center justify-center rounded-xs rounded-r-md bg-white p-(--content-card-padding)"
                    onClick={() => {
                        if (!isTransitioning) {
                            timeoutId !== null && clearTimeout(timeoutId);
                            setDuration(200);
                            moveImages_Cb('forward');
                        }
                    }}
                >
                    <div className="size-3 bg-theme-primary [clip-path:polygon(0%_0%,100%_50%,0%_100%)]" />
                </button>
            </div>

            <div id="carousel" className="z-0 size-full">
                <div className="relative size-full overflow-x-hidden">
                    {paddedImageSources.map((source, idx, arr) => (
                        <img
                            key={idx === arr.length - 1 ? idx : source}
                            src={source}
                            alt={idx.toString()}
                            className={classNames(
                                'absolute size-full object-cover transition-transform',
                                displayCount > 1 && 'border-r-7 border-l-7 border-white',
                            )}
                            style={{
                                transitionDuration: `${duration}ms`,
                                width: `${100 / displayCount}%`,
                                transform: `translate(${idx === 0 ? -100 : (idx - 1) * 100}%, var(--tw-translate-y))`,
                            }}
                            onTransitionEnd={handleImageTransitionEnd}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

    function handleImageTransitionEnd(ev: TargetedTransitionEvent<HTMLImageElement>) {
        if (ev.currentTarget === ev.target) {
            setIsTransitioning(false);
        }
    }
};

export default Carousel;

function wrapNumber(num: number, wrapAt: number) {
    return ((num % wrapAt) + wrapAt) % wrapAt;
}

function doSetTimeouts(callback: () => unknown) {
    const timer = setTimeout(() => {
        callback();
    }, CAROUSEL_TIMEOUT_MS);

    return timer;
}

function padArray<T>(arr: T[], currentIndex: number, count: number) {
    const visibleElements = [];
    const offscreenPrev = wrapNumber(currentIndex - 1, arr.length);
    const offscreenNext = wrapNumber(currentIndex + count, arr.length);

    for (let i = 0; i <= count; i++) {
        visibleElements.push(arr[wrapNumber(currentIndex + i, arr.length)]);
    }

    return [arr[offscreenPrev], ...visibleElements, arr[offscreenNext]];
}
