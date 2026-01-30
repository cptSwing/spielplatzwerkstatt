import type { ACF_Produkt_Story } from '../types/types';
import Carousel from './Carousel';
import { BreakpointContext } from '../lib/BreakpointContext';
import { useContext } from 'preact/hooks';

const ProduktStory = ({ storyData }: { storyData: ACF_Produkt_Story }) => {
    const breakpoint = useContext(BreakpointContext);
    const { titel, beschreibung, bilder } = storyData;
    const imageSources = bilder ? Object.values(bilder).filter(Boolean) : [];

    return (
        <div className="element-level-1 flex w-(--container-width) flex-col items-start justify-start gap-(--content-card-padding-double) border-(--slug-color) p-(--content-card-padding) md:p-(--content-card-padding-double)">
            <div className="w-full">
                <h5 className="relative z-0 my-0 w-fit pr-10 pl-(--content-card-padding-half) text-theme-background before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:bg-(--slug-color) md:pl-(--content-card-padding)">
                    {titel}
                </h5>
                <hr className="-mt-(--content-card-padding-half) w-full text-(--slug-color)" />
            </div>

            <div className="relative h-80 w-full">
                {imageSources.length ? (
                    <Carousel images={imageSources} displayCount={breakpoint === 'base' ? 1 : breakpoint === 'sm' ? 2 : 3} />
                ) : (
                    <div className="grid size-full grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-3">
                        <div className='bg-neutral-400 [mask:url("/svg/PhotoOutline.svg")]' />
                        <div className='bg-neutral-400 [mask:url("/svg/PhotoOutline.svg")]' />
                        <div className='bg-neutral-400 [mask:url("/svg/PhotoOutline.svg")]' />
                    </div>
                )}
            </div>

            <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: beschreibung }}
            />
        </div>
    );
};

export default ProduktStory;
