import { classNames } from 'cpts-javascript-utilities';
import { useEffect, useState } from 'preact/compat';

const FloatingButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={classNames(
                'fixed right-(--container-horizontal-margin) bottom-(--clipped-margin-and-offset) z-50 transition-[translate,scale,opacity] duration-500',
                visible
                    ? 'pointer-events-auto translate-x-0 scale-100 opacity-100 md:translate-x-1/2 xl:translate-x-full'
                    : 'pointer-events-none translate-x-(--container-horizontal-margin) scale-x-50 scale-y-10 opacity-0',
            )}
        >
            <a
                href="/pages/kontakt.php"
                className="relative inline-block cursor-pointer rounded-full bg-theme-cta/95 px-2 py-1.5 font-gabarito text-base text-white no-underline shadow-level-3 shadow-black/20 outline-2 outline-offset-0 outline-theme-accent transition-[outline-color,outline-width,outline-offset,scale] focus:-translate-y-px hover-active:scale-110 hover-active:shadow-black/25 hover-active:outline-4 hover-active:outline-offset-4 hover-active:outline-theme-accent/75"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-1 inline size-6">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                </svg>
                <span className="text-sm font-light">Kontakt</span>
            </a>
        </div>
    );

    function handleScroll() {
        setVisible(window.scrollY > window.innerHeight * 0.5);
    }
};

export default FloatingButton;
