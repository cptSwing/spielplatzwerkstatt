import type { ACF_Info_Karte } from '../types/types';

const InfoKarten = ({
    kartenData,
}: {
    kartenData: {
        infokarte_1: ACF_Info_Karte;
        infokarte_2: ACF_Info_Karte;
        infokarte_3: ACF_Info_Karte;
        infokarte_4: ACF_Info_Karte;
        infokarte_5: ACF_Info_Karte;
    };
}) => {
    const { infokarte_1, infokarte_2, infokarte_3, infokarte_4, infokarte_5 } = kartenData;

    return (
        <div className="my-16 flex w-(--container-width) flex-wrap items-start justify-center gap-(--info-karten-gap) [--info-karten-gap:--spacing(12)]">
            <InfoKarte titel={infokarte_1.titel} text={infokarte_1.text} />
            <InfoKarte titel={infokarte_2.titel} text={infokarte_2.text} />
            <InfoKarte titel={infokarte_3.titel} text={infokarte_3.text} />
            <InfoKarte titel={infokarte_4.titel} text={infokarte_4.text} />
            <InfoKarte titel={infokarte_5.titel} text={infokarte_5.text} />
        </div>
    );
};

export default InfoKarten;

const InfoKarte = ({ titel, text }: { titel: string; text: string }) => {
    return (
        <div className="element-level-1 h-42 shrink-0 basis-full overflow-hidden border-(--slug-color) md:basis-1/3 lg:basis-[calc(33.333%-var(--info-karten-gap))]">
            <div className="relative mb-1 h-fit p-1 pb-3 md:pb-6">
                <div className="absolute top-0 -left-px z-0 h-full w-dvw bg-(--slug-color) [clip-path:var(--clip-path-angled-bottom)]" />
                <h5 className="relative z-10 my-0 text-center text-theme-background">{titel}</h5>
            </div>

            <div
                className="p-2 pt-0 text-justify text-xs text-pretty md:-mt-3"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    );
};
