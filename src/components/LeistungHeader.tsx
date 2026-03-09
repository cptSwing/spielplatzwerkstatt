import { useState } from 'preact/hooks';
import type { ACF_Video } from '../types/types';
import { LoadingSpinner } from './LoadingMessage';

const LeistungHeader = ({ headerData }: { headerData: { titel: string; header_video: ACF_Video } }) => {
    const { titel, header_video } = headerData;
    const [canPlay, setCanPlay] = useState(false);

    return (
        <div className="relative -mt-(--clipped-margin-and-offset) h-(--page-height-no-header) w-dvw bg-neutral-300 [clip-path:var(--clip-path-angled-bottom)]">
            {titel && (
                <div className="animate-header-title absolute top-(--clipped-margin-and-offset) z-20 mx-(--container-horizontal-margin) bg-(--slug-color) p-2 shadow-lg">
                    <h2 className="my-0 leading-none text-white">{titel}</h2>
                </div>
            )}

            <video
                src={header_video.url}
                poster={header_video.sizes?.large ? header_video.sizes.large : '/images/1-pixel-black.png'}
                playsinline
                muted
                loop
                preload="auto"
                autoPlay
                className="size-full object-cover"
                aria-hidden="true"
                onCanPlay={() => {
                    setCanPlay(true);
                }}
            />

            {!canPlay && (
                <div className="absolute top-0 left-0 flex size-full items-center justify-center text-(--slug-color)">
                    <div className="relative">
                        <LoadingSpinner />
                        <div className='absolute size-10 -translate-y-full scale-35 animate-pulse bg-[currentColor] [mask:url("/svg/PlayOutline.svg")]' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeistungHeader;
