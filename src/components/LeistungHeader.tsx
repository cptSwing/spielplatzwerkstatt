import isDefined from '../lib/isDefined';
import type { ACF_Header_Slider_Bild } from '../types/types';
import Carousel from './Carousel';

const LeistungHeader = ({
    headerData,
}: {
    headerData: { titel: string; header_bild_1: ACF_Header_Slider_Bild; header_bild_2: ACF_Header_Slider_Bild; header_bild_3: ACF_Header_Slider_Bild };
}) => {
    const { titel, ...rest } = headerData;

    const bilder = Object.values(rest)
        .map((headerImage) => {
            if (headerImage.bild) {
                return { ...headerImage.bild, beschreibung: headerImage.beschreibung };
            }
        })
        .filter(isDefined);

    return (
        <div className="relative -mt-(--clipped-margin-and-offset) h-(--page-height-no-header-no-footer) w-dvw bg-neutral-300 [clip-path:var(--clip-path-angled-bottom)]">
            {titel && (
                <div className="absolute top-(--clipped-margin-and-offset) z-20 mx-(--container-horizontal-margin) bg-(--slug-color) p-2 shadow-lg">
                    <h2 className="my-0 leading-none text-white">{titel}</h2>
                </div>
            )}

            {bilder.length ? <Carousel images={bilder} showMenu={false} /> : null}
        </div>
    );
};

export default LeistungHeader;
