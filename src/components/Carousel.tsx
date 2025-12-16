import { classNames } from 'cpts-javascript-utilities';
import { useCallback, useEffect, useState, type FC } from 'preact/compat';

const CAROUSEL_INTERVAL_MS = 4000 as const;

function nullInterval(intervalId: number, callback: () => void) {
    clearInterval(intervalId);
    callback();
}

const Carousel: FC<{ imageSources: string[]; displayCount?: number }> = ({ imageSources, displayCount = 1 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [intervalId, setIntervalId] = useState<number | null>(null);

    const moveBackward_Cb = useCallback(() => {
        setIsTransitioning(true);
        setOffset(-1);
    }, []);

    const moveForward_Cb = useCallback(() => {
        setIsTransitioning(true);
        setOffset(1);
    }, []);

    // Get the ball rollin'
    useEffect(() => {
        setIntervalId(doSetInterval(moveForward_Cb));
    }, [moveForward_Cb]);

    useEffect(() => {
        if (isPaused) {
            nullInterval(intervalId!, () => setIntervalId(null));
        } else {
            setIntervalId((old) => (old === null ? doSetInterval(offset === -1 ? moveBackward_Cb : moveForward_Cb, true) : old));
        }
    }, [isPaused, moveForward_Cb, intervalId, offset, moveBackward_Cb]);

    const slotCount = displayCount + 2;
    const slotWidth = 100 / displayCount;
    const trackWidth = slotCount * slotWidth;

    return (
        <div className="size-full">
            {/* Buttons */}
            <div className="absolute bottom-6 z-10 flex w-full items-center justify-between">
                <button
                    className="flex translate-x-6 cursor-pointer items-center justify-center rounded-xs rounded-l-md bg-neutral-400/80 p-(--content-card-padding)"
                    onClick={() => {
                        moveBackward_Cb();
                        nullInterval(intervalId!, () => setIntervalId(null));
                    }}
                >
                    <div className="size-3 bg-theme-primary [clip-path:polygon(0%_50%,100%_0%,100%_100%)]" />
                </button>

                <div className="relative">
                    <div className="flex size-fit items-center justify-between gap-2">
                        <button
                            className={classNames(
                                'h-4 cursor-pointer border-0 border-transparent border-l-neutral-300/80',
                                isPaused ? 'border-t-8 border-b-8 border-l-14 border-solid' : 'border-l-14 border-double',
                            )}
                            onClick={() => setIsPaused((old) => !old)}
                        />

                        {imageSources.map((iSrc, idx) => (
                            <button
                                key={`dot ${iSrc} ${idx}`}
                                className={classNames('h-1.5 w-8 rounded-xs', idx === currentImageIndex ? 'bg-white/80' : 'bg-neutral-400/80')}
                            />
                        ))}
                    </div>
                </div>

                <button
                    className="flex -translate-x-6 cursor-pointer items-center justify-center rounded-xs rounded-r-md bg-neutral-400/80 p-(--content-card-padding)"
                    onClick={() => {
                        moveForward_Cb();
                        nullInterval(intervalId!, () => setIntervalId(null));
                    }}
                >
                    <div className="size-3 bg-theme-primary [clip-path:polygon(0%_0%,100%_50%,0%_100%)]" />
                </button>
            </div>

            {/* Carousel */}
            <div className="h-full w-full overflow-hidden">
                <div
                    className="flex h-full transition-transform will-change-transform"
                    style={{
                        width: `${trackWidth}%`,
                        transform: `translateX(${(-(offset + 1) * 100) / slotCount}%)`,
                        transitionDuration: isTransitioning ? '1000ms' : '0ms',
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {Array.from({ length: slotCount }).map((_, idx) => {
                        const slotIndex = idx - 1;
                        const imgIndex = wrapNumber(currentImageIndex + slotIndex, imageSources.length);
                        return (
                            <div
                                key={idx}
                                className="relative bg-cover bg-center"
                                style={{
                                    width: `${slotWidth}%`,
                                    backgroundImage: `url(${imageSources[imgIndex]})`,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );

    function handleTransitionEnd() {
        setIsTransitioning(false);
        setOffset(0);
        setCurrentImageIndex((old) => wrapNumber(old + offset, imageSources.length));
    }
};

export default Carousel;

function wrapNumber(num: number, wrapAt: number) {
    return ((num % wrapAt) + wrapAt) % wrapAt;
}

function doSetInterval(callback: () => unknown, runInstantly = false) {
    runInstantly && callback();
    const interval = setInterval(() => callback(), CAROUSEL_INTERVAL_MS);
    return interval;
}
