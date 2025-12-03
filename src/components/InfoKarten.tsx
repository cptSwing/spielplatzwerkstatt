import type { ACF_Info_Karten } from '../types/types';

const InfoKarten = ({ kartenData }: { kartenData: ACF_Info_Karten }) => {
    const { infokarte_1, infokarte_2, infokarte_3, infokarte_4, infokarte_5 } = kartenData;

    return (
        <div className="flex flex-col items-center justify-start gap-4">
            <div className="flex items-start justify-center gap-4">
                <div className="h-32 w-48 bg-gray-400 text-center">{infokarte_1}</div>
                <div className="h-32 w-48 bg-gray-400 text-center">{infokarte_2}</div>
                <div className="h-32 w-48 bg-gray-400 text-center">{infokarte_3}</div>
            </div>
            <div className="flex items-start justify-center gap-4">
                <div className="h-32 w-48 bg-gray-400 text-center">{infokarte_4}</div>
                <div className="h-32 w-48 bg-gray-400 text-center">{infokarte_5}</div>
            </div>
        </div>
    );
};

export default InfoKarten;
