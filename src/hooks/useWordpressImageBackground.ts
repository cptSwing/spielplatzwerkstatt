import { useEffect, useRef, useState } from 'preact/hooks';
import type { ACF_Media_Sizes } from '../types/types';

const _remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);

const wordPressImageWidthInPixels: Record<keyof ACF_Media_Sizes | 'full', number> = {
    'thumbnail': 150,
    'medium': 300,
    'large': 1024,
    '1536x1536': 1536,
    '2048x2048': 2048,
    'full': 9999,
};

export const useWordpressImageBackground = <T extends Element>(images: Record<keyof ACF_Media_Sizes | 'full', string>) => {
    const ref = useRef<T | null>(null);
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    useEffect(() => {
        if (!ref.current) return;

        const dpr = window.devicePixelRatio || 1;

        const resizeObserver = new ResizeObserver(([entry]) => {
            const width = entry.contentRect.width * dpr;
            const src = pickImage(width, images);

            setBackgroundImage((oldImage) => (oldImage === src ? oldImage : src));
        });

        resizeObserver.observe(ref.current);

        return () => resizeObserver.disconnect();
    }, [images]);

    return {
        ref,
        backgroundImageSrc: backgroundImage,
    };

    /* Local Functions */
};

function pickImage(width: number, imageSources: Record<keyof ACF_Media_Sizes | 'full', string>) {
    if (width < wordPressImageWidthInPixels.thumbnail) return imageSources.thumbnail;
    if (width < wordPressImageWidthInPixels.medium) return imageSources.medium ?? imageSources.thumbnail;
    if (width < wordPressImageWidthInPixels.large) return imageSources.large ?? imageSources.medium ?? imageSources.thumbnail;
    if (width < wordPressImageWidthInPixels['1536x1536']) return imageSources['1536x1536'] ?? imageSources.large;
    if (width < wordPressImageWidthInPixels['2048x2048']) return imageSources['2048x2048'] ?? imageSources['1536x1536'];

    return imageSources.full ?? imageSources['2048x2048'] ?? imageSources['1536x1536'];
}
