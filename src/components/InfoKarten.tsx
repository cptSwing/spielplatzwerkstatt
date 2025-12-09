import type { ACF_Info_Karten } from '../types/types';

const InfoKarten = ({ kartenData }: { kartenData: ACF_Info_Karten }) => {
    const { infokarte_1, infokarte_2, infokarte_3, infokarte_4, infokarte_5 } = kartenData;

    return (
        <div className="h-(--page-height-no-header-no-footer)">
            <div className="my-32 flex flex-wrap items-start justify-center gap-6">
                <div className="element-level-1 h-40 shrink-0 basis-1/4 bg-sky-100 p-2 text-center">{infokarte_1}</div>
                <div className="element-level-1 h-40 shrink-0 basis-1/4 bg-sky-100 p-2 text-center">{infokarte_2}</div>
                <div className="element-level-1 h-40 shrink-0 basis-1/4 bg-sky-100 p-2 text-center">{infokarte_3}</div>
                <div className="element-level-1 h-40 shrink-0 basis-1/4 bg-sky-100 p-2 text-center">{infokarte_4}</div>
                <div className="element-level-1 h-40 shrink-0 basis-1/4 bg-sky-100 p-2 text-center">{infokarte_5}</div>
            </div>
        </div>
    );
};

export default InfoKarten;
