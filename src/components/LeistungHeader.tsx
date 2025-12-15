import type { ACF_Vollbild_Slider } from '../types/types';
import Carousel from './Carousel';

const LeistungHeader = ({ headerData }: { headerData: ACF_Vollbild_Slider }) => {
    const { titel, ...rest } = headerData;
    const bilder = Object.values(rest);

    return (
        <div className="element-level-1 relative h-(--page-height-no-header-no-footer) w-full border border-theme-primary bg-white! p-(--content-card-padding)">
            <div className="absolute top-12 left-12 z-20 bg-(--slug-color) p-2 shadow-lg">
                <h2 className="text-white">{titel}</h2>
            </div>

            <Carousel imageSources={bilder} />
        </div>
    );
};

export default LeistungHeader;
