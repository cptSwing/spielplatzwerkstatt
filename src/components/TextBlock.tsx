import type { ACF_Info_Karte } from '../types/types';

const TextBlock = ({ textBlockData }: { textBlockData: ACF_Info_Karte }) => {
    const { titel, text } = textBlockData;
    return (
        <div className="drop-shadow-sm">
            <div className="element-level-1 my-(--header-footer-margin) h-auto w-dvw bg-(--slug-color) px-(--container-horizontal-margin) py-(--header-footer-offset) [clip-path:polygon(0%_var(--header-footer-offset),100%_0%,100%_calc(100%-var(--header-footer-offset)),0%_100%)]">
                <h2 className="my-2 text-left text-lg text-white">{titel}</h2>
                <div
                    className="text-justify text-pretty text-white"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </div>
        </div>
    );
};

export default TextBlock;
