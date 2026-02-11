import { classNames } from 'cpts-javascript-utilities';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { ACF_Info_Karte } from '../types/types';

const TextBlock = ({ textBlockData }: { textBlockData: ACF_Info_Karte }) => {
    const { titel, text } = textBlockData;

    const { isIntersecting, ref } = useIntersectionObserver({
        freezeOnceVisible: true,
        threshold: 0.5,
    });

    return (
        <div
            ref={ref}
            className={classNames('drop-shadow-md drop-shadow-black/30 transition-[opacity] duration-700', isIntersecting ? 'opacity-100' : 'opacity-0')}
        >
            <div className="element-level-1 mt-(--header-footer-margin) h-auto w-dvw !border-none bg-(--slug-color) px-(--container-horizontal-margin) py-(--header-footer-margin) [clip-path:var(--clip-path-angled-full)]">
                <h2 className="mt-0 text-left leading-none text-white">{titel}</h2>
                <div
                    className="text-pretty text-white"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </div>
        </div>
    );
};

export default TextBlock;
