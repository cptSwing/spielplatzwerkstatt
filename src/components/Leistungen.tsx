import type { ACF_Leistung_Type } from '../types/types';
import InfoKarten from './InfoKarten';
import ProduktStory from './ProduktStory';
import LeistungHeader from './LeistungHeader';
import TextBlock from './TextBlock';

const Leistungen = ({ leistungsData }: { leistungsData: ACF_Leistung_Type }) => {
    const { vollbild_slider, info_kaertchen, produkt_story_a, produkt_story_b, produkt_story_c } = leistungsData;

    return (
        <main className="relative flex flex-col items-center justify-start gap-y-24">
            <LeistungHeader headerData={vollbild_slider} />
            <TextBlock />
            <InfoKarten kartenData={info_kaertchen} />
            <ProduktStory storyData={produkt_story_a} />
            {produkt_story_b && <ProduktStory storyData={produkt_story_b} />}
            {produkt_story_c && <ProduktStory storyData={produkt_story_c} />}
        </main>
    );
};

export default Leistungen;
