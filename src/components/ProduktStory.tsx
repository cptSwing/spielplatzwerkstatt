import type { ACF_Produkt_Story } from '../types/types';
import Carousel from './Carousel';
import { BreakpointContext } from '../lib/BreakpointContext';
import { useContext } from 'preact/hooks';

const ProduktStory = ({ storyData }: { storyData: ACF_Produkt_Story }) => {
    const { titel, beschreibung, bilder } = storyData;

    const breakpoint = useContext(BreakpointContext);

    const imageSources = bilder ? Object.values(bilder).filter(Boolean) : [];

    return (
        <div className="element-level-1 flex w-(--container-width) flex-col items-start justify-start gap-(--content-card-padding-double) p-(--content-card-padding-double)">
            <div className="w-full">
                <h5 className="relative z-0 my-0 w-fit pr-10 pl-(--content-card-padding) text-theme-background before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:bg-(--slug-color)">
                    {titel}
                </h5>
                <hr className="-mt-(--content-card-padding-half) w-full text-(--slug-color)" />
            </div>

            {imageSources.length && (
                <div className="relative h-80 w-full">
                    <Carousel images={imageSources} displayCount={breakpoint === null ? 1 : breakpoint === 'sm' ? 2 : 3} />
                </div>
            )}

            <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: beschreibung }}
            />
        </div>
    );
};

export default ProduktStory;
