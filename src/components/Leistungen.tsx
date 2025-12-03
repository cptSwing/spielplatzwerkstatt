import type { ACF_Leistung_Type } from '../types/types';
import InfoKarten from './InfoKarten';
import ProduktStory from './ProduktStory';
import LeistungHeader from './LeistungHeader';

const Leistungen = ({ leistungsData }: { leistungsData: ACF_Leistung_Type }) => {
    const { vollbild_slider, info_kaertchen, produkt_story_a, produkt_story_b, produkt_story_c } = leistungsData;

    return (
        <div className="flex w-(--container-width) flex-col items-center justify-start gap-y-12">
            <LeistungHeader headerData={vollbild_slider} />
            <InfoKarten kartenData={info_kaertchen} />
            <ProduktStory storyData={produkt_story_a} />
            {produkt_story_b && <ProduktStory storyData={produkt_story_b} />}
            {produkt_story_c && <ProduktStory storyData={produkt_story_c} />}
        </div>
    );
};

export default Leistungen;
