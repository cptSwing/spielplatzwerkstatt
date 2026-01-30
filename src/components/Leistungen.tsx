import type { ACF_Leistung_Type, ArrayElement } from '../types/types';
import InfoKarten from './InfoKarten';
import ProduktStory from './ProduktStory';
import LeistungHeader from './LeistungHeader';
import TextBlock from './TextBlock';
import type { ROUTES } from '../types/consts';

const Leistungen = ({ leistungsData, route }: { leistungsData: ACF_Leistung_Type; route: ArrayElement<typeof ROUTES> }) => {
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

    let slugColor: string = '';
    switch (route) {
        case 'spielplatzbau':
            slugColor = 'var(--color-theme-dunkelgruen)';
            break;

        case 'galabau':
            slugColor = 'var(--color-theme-weinrot)';
            break;

        case 'naschgarten':
            slugColor = 'var(--color-theme-gelb)';
            break;

        case 'workshops':
            slugColor = 'var(--color-theme-hellgruen)';
            break;
    }

    return (
        <main
            className="relative flex min-h-(--page-height-no-header-no-footer-without-margins) flex-col items-center justify-start gap-y-12 md:gap-y-24"
            style={{ '--slug-color': slugColor }}
        >
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
