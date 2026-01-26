import { type LEISTUNGEN } from '../types/consts';

// Annoyingly, tsc spits out errors during build if I don't import this way: https://stackoverflow.com/a/74039065
const { WP_REST_API_Post } = require('wp-types');

type ConstValues<T extends readonly unknown[]> = T[number];
export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export type WP_REST_API_Post_With_ACF_Type = WP_REST_API_Post & ACF_Property;

export type ACF_Property = {
    acf: ACF_Leistung_Type | ACF_Home_Type | ACF_Nachricht_Type | ACF_Contacts_Type;
    id: number;
    slug?: string;
    title?: {
        rendered: string;
    };
};

type Leistungsbeschreibungen = Record<ConstValues<typeof LEISTUNGEN>, ACF_Leistungsbeschreibung_Type>;
export type ACF_Home_Type = Leistungsbeschreibungen & { video: ACF_Video };

export type ACF_Nachricht_Type = {
    titel: string;
    datum: string;
    text: string;
    bild?: ACF_Image;
};

export type ACF_Contacts_Type = {
    chef_1: ACF_Contact_Type;
    chef_2: ACF_Contact_Type;
};

export type ACF_Contact_Type = {
    name: string;
    aufgabe: string;
    text: string;
    bild: ACF_Image;
    email: string;
    telefonnummer: string;
};

export type ACF_Leistungsbeschreibung_Type = {
    text: string;
    bild: ACF_Image | false;
};

export type ACF_Leistung_Type = {
    header_text: string;
    header_bild_1: ACF_Header_Slider_Bild;
    header_bild_2: ACF_Header_Slider_Bild;
    header_bild_3: ACF_Header_Slider_Bild;

    banderole: ACF_Info_Karte;

    infokarte_1: ACF_Info_Karte;
    infokarte_2: ACF_Info_Karte;
    infokarte_3: ACF_Info_Karte;
    infokarte_4: ACF_Info_Karte;
    infokarte_5: ACF_Info_Karte;

    produkt_story_a?: ACF_Produkt_Story;
    produkt_story_b?: ACF_Produkt_Story;
    produkt_story_c?: ACF_Produkt_Story;

    zweite_produkt_story: boolean;
    dritte_produkt_story?: boolean;
};

export type ACF_Header_Slider_Bild = {
    beschreibung: string;
    bild: ACF_Image;
};

export type ACF_Info_Karte = {
    titel: string;
    text: string;
};

export type ACF_Produkt_Story = {
    titel: string;
    beschreibung: string;
    bilder?: {
        bild_1: ACF_Image;
        bild_2: ACF_Image;
        bild_3: ACF_Image;
        bild_4: ACF_Image;
        bild_5?: ACF_Image;
        bild_6?: ACF_Image;
        bild_7?: ACF_Image;
        bild_8?: ACF_Image;
        bild_9?: ACF_Image;
        bild_10?: ACF_Image;
        bild_11?: ACF_Image;
        bild_12?: ACF_Image;
        bild_13?: ACF_Image;
        bild_14?: ACF_Image;
        bild_15?: ACF_Image;
    };
};

type ACF_File = {
    ID: number;
    date: string;
    url: string;
};

export type ACF_Image = ACF_File & {
    beschreibung?: string;
    sizes: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    type: 'image';
};

export type ACF_Video = ACF_File & {
    description: string;
    filename: string;
    filesize: number;
    width: number;
    height: number;
    sizes: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    type: 'video';
    name: string;
    title: string;
    mime_type: string;
    alt: string;
    author: string;
};
