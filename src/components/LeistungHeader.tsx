import type { ACF_Video } from '../types/types';

const LeistungHeader = ({ headerData }: { headerData: { titel: string; header_video: ACF_Video } }) => {
    const { titel, header_video } = headerData;

    return (
        <div className="relative -mt-(--clipped-margin-and-offset) h-(--page-height-no-header-no-footer) w-dvw bg-neutral-300 [clip-path:var(--clip-path-angled-bottom)]">
            {titel && (
                <div className="absolute top-(--clipped-margin-and-offset) z-20 mx-(--container-horizontal-margin) bg-(--slug-color) p-2 shadow-lg">
                    <h2 className="my-0 leading-none text-white">{titel}</h2>
                </div>
            )}

            {header_video.url && (
                <video
                    src={header_video.url}
                    poster={header_video.sizes.large ? header_video.sizes.large : 'images/1-pixel-black.png'}
                    playsinline
                    muted
                    loop
                    autoPlay
                    className="size-full object-cover"
                    aria-hidden="true"
                />
            )}
        </div>
    );
};

export default LeistungHeader;
