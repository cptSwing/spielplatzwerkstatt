/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState } from 'preact/hooks';

const HamburgerMenu = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="pointer-events-none fixed top-0 right-0 bottom-0 left-0 z-50 md:hidden">
            <input
                id="input-radio-hamburger"
                name="input-hamburger"
                type="checkbox"
                className="peer input-clip-hidden"
                checked={isChecked}
                onClick={() => setIsChecked(true)}
            />
            <label
                for="input-radio-hamburger"
                className="pointer-events-auto absolute top-(--header-footer-margin) right-(--container-horizontal-margin) block flex flex-col items-start justify-center gap-y-1 peer-checked:hidden"
            >
                <div className="h-0.75 w-7 bg-theme-primary-variation" />
                <div className="h-0.75 w-7 bg-theme-primary-variation" />
                <div className="h-0.75 w-7 bg-theme-primary-variation" />
            </label>

            <button className="pointer-events-none -z-50 block h-full w-full peer-checked:pointer-events-auto" onClick={() => setIsChecked(false)} />

            <label
                for="input-radio-hamburger"
                className="pointer-events-none absolute top-0 right-0 z-10 block h-full translate-x-[120%] bg-theme-background px-(--container-horizontal-margin) pt-(--header-footer-margin) shadow-level-3 transition-transform peer-checked:pointer-events-auto peer-checked:translate-x-0"
            >
                <button className="group pointer-events-auto mr-0 ml-auto block size-8 rounded-full bg-neutral-200 p-1" onClick={() => setIsChecked(false)}>
                    <div className='size-full bg-theme-text/50 [mask:url("/svg/XMarkOutline.svg")] group-hover:bg-theme-text group-active:bg-theme-text' />
                </button>

                <div className="mt-4 flex flex-col items-end justify-start gap-y-2 pr-0.5 font-gabarito leading-none text-nowrap">
                    <hr className="border-1 border-dashed opacity-10" />

                    <a href="../index.php#home-anchor-news" className="w-full no-underline">
                        <h6 className="my-0 bg-neutral-300 pr-1 pl-6 text-right text-white active:bg-neutral-300/50">Neuigkeiten</h6>
                    </a>

                    <hr className="border-1 border-dashed opacity-10" />

                    <a href="../index.php#home-anchor-spielplatzbau" className="w-full no-underline">
                        <h6 className="my-0 bg-theme-dunkelgruen pr-1 pl-6 text-right text-white active:bg-theme-dunkelgruen/50">Spielplatzbau</h6>
                    </a>

                    <hr className="border-1 border-dashed opacity-10" />

                    <a href="../index.php#home-anchor-galabau" className="w-full no-underline">
                        <h6 className="my-0 bg-theme-weinrot pr-1 pl-6 text-right text-white active:bg-theme-weinrot/50">Garten- & Landschaftsbau</h6>
                    </a>

                    <hr className="border-1 border-dashed opacity-10" />

                    <a href="../index.php#home-anchor-naschgarten" className="w-full no-underline">
                        <h6 className="my-0 bg-theme-gelb pr-1 pl-6 text-right text-white active:bg-theme-gelb/50">Naschgarten</h6>
                    </a>

                    <hr className="border-1 border-dashed opacity-10" />

                    <a href="../index.php#home-anchor-workshops" className="w-full no-underline">
                        <h6 className="my-0 bg-theme-hellgruen pr-1 pl-6 text-right text-white active:bg-theme-hellgruen/50">Workshops</h6>
                    </a>

                    <hr className="border-1 border-dashed opacity-10" />
                </div>
            </label>
        </div>
    );
};

export default HamburgerMenu;
