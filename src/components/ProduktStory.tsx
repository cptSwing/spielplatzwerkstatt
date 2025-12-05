import { useRef } from 'preact/hooks';
import type { ACF_Produkt_Story } from '../types/types';
import Slider from './Slider';
import { useBreakpoint } from '../hooks/useBreakpoint';

const ProduktStory = ({ storyData }: { storyData: ACF_Produkt_Story }) => {
    const { titel, beschreibung, ...rest } = storyData;
    const produktStory_Ref = useRef<HTMLDivElement | null>(null);

    const breakpoint = useBreakpoint();

    const bilder = Object.values(rest).filter(Boolean);

    return (
        <div ref={produktStory_Ref} className="relative h-(--page-height-no-header)">
            <h3>{titel}</h3>
            <div className="h-1/2 w-full bg-neutral-400 p-(--content-card-padding)">
                <Slider images={bilder} visibleItemsCount={breakpoint === null ? 1 : breakpoint === 'sm' ? 2 : 3} />
            </div>
            <p>{beschreibung}</p>
        </div>
    );
};

export default ProduktStory;
