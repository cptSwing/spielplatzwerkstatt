import type { ACF_Produkt_Story } from '../types/types';
import Slider from './Slider';

const ProduktStory = ({ storyData }: { storyData: ACF_Produkt_Story }) => {
    const { titel, beschreibung, ...rest } = storyData;
    const bilder = Object.values(rest).filter(Boolean);

    return (
        <div>
            <h3>{titel}</h3>
            <div className="relative box-content h-[calc(var(--header-footer-remaining-height)*0.7)] w-full bg-neutral-400 py-2">
                <Slider images={bilder} visibleItemsCount={3} square />
            </div>
            <p>{beschreibung}</p>
        </div>
    );
};

export default ProduktStory;
