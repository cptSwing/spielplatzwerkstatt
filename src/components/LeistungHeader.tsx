import type { ACF_Header_Slider_Bild } from '../types/types';
import Carousel from './Carousel';

const LeistungHeader = ({
    headerData,
}: {
    headerData: { titel: string; header_bild_1: ACF_Header_Slider_Bild; header_bild_2: ACF_Header_Slider_Bild; header_bild_3: ACF_Header_Slider_Bild };
}) => {
    const { titel, ...rest } = headerData;
    const bilder = Object.values(rest).map((headerImage) => ({ ...headerImage.bild, beschreibung: headerImage.beschreibung }));

    return (
        <div className="relative -mt-[calc(var(--header-footer-margin)+var(--header-footer-offset))] h-[calc(var(--page-height-no-header-no-footer)+var(--header-footer-margin))] w-dvw [clip-path:var(--clip-path-angled-full)]">
            <div className="absolute top-[calc(var(--scroll-padding-top-value)-var(--header-footer-height)+var(--header-footer-offset))] left-(--container-horizontal-margin) z-20 bg-(--slug-color) p-2 shadow-lg">
                <h2 className="my-0 leading-none text-white">{titel}</h2>
            </div>

            <Carousel images={bilder} showMenu={false} />
        </div>
    );
};

export default LeistungHeader;
