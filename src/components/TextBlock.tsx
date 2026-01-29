import type { ACF_Info_Karte } from '../types/types';

const TextBlock = ({ textBlockData }: { textBlockData: ACF_Info_Karte }) => {
    const { titel, text } = textBlockData;
    return (
        <div className="drop-shadow-md drop-shadow-black/30">
            <div className="element-level-1 my-(--header-footer-margin) h-auto w-dvw bg-(--slug-color) px-(--container-horizontal-margin) py-(--header-footer-offset) [clip-path:var(--clip-path-angled-full)]">
                <h2 className="my-0 text-left leading-none text-white">{titel}</h2>
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
