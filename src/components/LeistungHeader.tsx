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
        <div className="element-level-1 relative h-(--page-height-no-header-no-footer) w-(--container-width) border border-theme-primary bg-white! p-(--content-card-padding)">
            <div className="absolute top-12 left-12 z-20 bg-(--slug-color) p-2 shadow-lg">
                <h2 className="text-white">{titel}</h2>
            </div>

            <Carousel images={bilder} />
        </div>
    );
};

export default LeistungHeader;
