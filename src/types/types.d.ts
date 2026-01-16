import { WP_REST_API_Post } from 'wp-types';

type ConstValues<T extends readonly unknown[]> = T[number];
export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export type WP_REST_API_Post_With_ACF_Type = WP_REST_API_Post & ACF_Property;

export type ACF_Property = {
    acf: ACF_Leistung_Type | ACF_Leistungsbeschreibung_Type | ACF_Nachricht_Type;
    id: number;
    slug?: string;
    title?: {
        rendered: string;
    };
};

export type ACF_Nachricht_Type = {
    titel: string;
    datum: string;
    text: string;
};

export type ACF_Leistungsbeschreibung_Type = {
    beschreibungstext: string;
    beschreibungsbild: string | false;
};

export type Leistungsbeschreibungen = Record<ConstValues<typeof LEISTUNGEN>, ACF_Leistungsbeschreibung_Type>;

export type ACF_Leistung_Type = {
    vollbild_slider: ACF_Vollbild_Slider;
    info_kaertchen: ACF_Info_Karten;
    produkt_story_a: ACF_Produkt_Story;
    produkt_story_b?: ACF_Produkt_Story;
    produkt_story_c?: ACF_Produkt_Story;
};

export type ACF_Vollbild_Slider = {
    titel: string;
    bild_1: string;
    bild_2: string;
    bild_3: string;
};

export type ACF_Info_Karten = {
    infokarte_1: string;
    infokarte_2: string;
    infokarte_3: string;
    infokarte_4: string;
    infokarte_5: string;
};

export type ACF_Produkt_Story = {
    titel: string;
    beschreibung: string;
    bild_1: string;
    bild_2: string;
    bild_3: string;
    bild_4: string;
    bild_5?: string;
    bild_6?: string;
    bild_7?: string;
    bild_8?: string;
    bild_9?: string;
    bild_10?: string;
    bild_11?: string;
    bild_12?: string;
    bild_13?: string;
    bild_14?: string;
    bild_15?: string;
};
