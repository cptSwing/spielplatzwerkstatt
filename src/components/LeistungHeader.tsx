import type { ACF_Vollbild_Slider } from '../types/types';
import Slider from './Slider';

const LeistungHeader = ({ headerData }: { headerData: ACF_Vollbild_Slider }) => {
    const { titel, ...rest } = headerData;
    const bilder = Object.values(rest);

    return (
        <div className="relative h-[calc(var(--header-footer-remaining-height)*0.9)] w-full bg-neutral-200 p-2">
            <h1 className="absolute top-12 left-12 z-20 bg-white p-2">{titel}</h1>
            <div className="size-full">
                <Slider images={bilder} withIndicator={false} />
            </div>
        </div>
    );
};

export default LeistungHeader;
