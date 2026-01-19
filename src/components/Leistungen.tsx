import type { ACF_Leistung_Type } from '../types/types';
import InfoKarten from './InfoKarten';
import ProduktStory from './ProduktStory';
import LeistungHeader from './LeistungHeader';
import TextBlock from './TextBlock';

const Leistungen = ({ leistungsData }: { leistungsData: ACF_Leistung_Type }) => {
    const {
        header_text,
        header_bild_1,
        header_bild_2,
        header_bild_3,
        banderole,
        infokarte_1,
        infokarte_2,
        infokarte_3,
        infokarte_4,
        infokarte_5,
        produkt_story_a,
        produkt_story_b,
        produkt_story_c,
    } = leistungsData;

    return (
        <main className="relative flex flex-col items-center justify-start gap-y-24">
            <LeistungHeader headerData={{ titel: header_text, header_bild_1, header_bild_2, header_bild_3 }} />
            <TextBlock textBlockData={banderole} />
            <InfoKarten kartenData={{ infokarte_1, infokarte_2, infokarte_3, infokarte_4, infokarte_5 }} />
            {produkt_story_a && <ProduktStory storyData={produkt_story_a} />}
            {produkt_story_b && <ProduktStory storyData={produkt_story_b} />}
            {produkt_story_c && <ProduktStory storyData={produkt_story_c} />}
        </main>
    );
};

export default Leistungen;
