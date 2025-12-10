import type { ACF_Vollbild_Slider } from '../types/types';
import Slider from './Slider';

const LeistungHeader = ({ headerData }: { headerData: ACF_Vollbild_Slider }) => {
    const { titel, ...rest } = headerData;
    const bilder = Object.values(rest);

    return (
        <div className="element-level-1 relative h-(--page-height-no-header-no-footer) w-full p-(--content-card-padding)">
            <h1 className="absolute top-12 left-12 z-20 bg-theme-primary-variation p-2 text-theme-weinrot shadow-lg">{titel}</h1>
            <div className="size-full">
                <Slider images={bilder} withIndicator={false} />
            </div>
        </div>
    );
};

export default LeistungHeader;
