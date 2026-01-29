import { useEffect, useRef, useState } from 'preact/hooks';
import type { ACF_Media_Sizes } from '../types/types';

// Square images by default, so width = height
const wordPressImageSizeInPixels: Record<keyof ACF_Media_Sizes, number> = {
    'thumbnail': 150,
    'medium': 300,
    'large': 1024,
    '1536x1536': 1536,
    '2048x2048': 2048,
};

export const useWordpressImageBackground = <T extends Element>(displayCount: number) => {
    const ref = useRef<T | null>(null);
    const [sizeValue, setSizeValue] = useState<keyof ACF_Media_Sizes | 'full'>('thumbnail');

    useEffect(() => {
        if (!ref.current) return;

        const dpr = window.devicePixelRatio || 1;

        const { width, height } = ref.current.getBoundingClientRect();
        const widthPerImage = width / displayCount;
        const widthDpr = widthPerImage * dpr;
        const heightDpr = height * dpr;

        const sizeValue = pickImageSize(widthDpr, heightDpr);
        setSizeValue(sizeValue);
    }, [displayCount]);

    return {
        ref,
        sizeValue,
    };
};

function pickImageSize(width: number, height: number): keyof ACF_Media_Sizes | 'full' {
    const sizeArray = Object.entries(wordPressImageSizeInPixels);

    const size = sizeArray.reduce(
        (previous, current) => {
            if (width <= current[1] && height <= current[1] && current[1] < previous[1]) {
                return current;
            }

            return previous;
        },
        ['full', Infinity],
    );

    return size[0] as keyof ACF_Media_Sizes | 'full';
}
