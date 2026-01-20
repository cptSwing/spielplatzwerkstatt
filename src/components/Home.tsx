import { useEffect } from 'preact/hooks';
import type { ACF_Home_Type } from '../types/types';
import NewsItems from './NewsItems';

const Home = ({ homeData }: { homeData: ACF_Home_Type }) => {
    const { spielplatzbau, galabau, naschgarten, workshops, video } = homeData;

    // TODO Scrolls to <section> anchors when page is ready
    // TODO Once hydration vs full-js content is implemented, this will not be necessary
    useEffect(() => {
        if (location.hash) {
            const target = document.querySelector(location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <main className="flex flex-col items-center justify-start gap-y-48">
            {/* <AnchorLinks /> */}
            <div className="relative mb-(--header-footer-margin) h-(--page-height-no-header-no-footer) w-dvw">
                <div className="mx-auto flex h-full w-(--container-width) flex-col items-center justify-between">
                    <h1 className="self-start text-theme-background">Willkommen bei der Spielplatzwerkstatt!</h1>

                    {/* News / Insta: */}
                    <NewsItems />
                </div>

                <div className="absolute top-0 left-0 -z-10 -mt-[calc(var(--header-footer-margin)+var(--header-footer-offset))] h-[calc(var(--page-height-no-header-no-footer)+var(--header-footer-margin))] w-full [clip-path:polygon(0%_var(--header-footer-offset),100%_0%,100%_calc(100%-var(--header-footer-offset)),0%_100%)]">
                    <div className="absolute size-full bg-linear-0 from-theme-background/25 via-theme-primary/50 to-theme-background/25 bg-size-[auto_5px] bg-repeat" />
                    <video src={video.url} preload="auto" muted loop autoPlay className="size-full object-cover" />
                </div>
            </div>

            {/* Anchored Elements: */}
            <section id="home-anchor-spielplatzbau" className="relative w-(--container-width)">
                <div className="element-level-1 w-full p-(--content-card-padding-double) [--anchored-content-hr-padding:calc(var(--anchored-content-image-width)*0.666)] [--anchored-content-image-width:--spacing(40)] md:[--anchored-content-image-width:--spacing(60)]">
                    <img
                        className="absolute right-0 size-(--anchored-content-image-width) translate-x-1/3 -translate-y-1/3 object-cover drop-shadow-md"
                        alt="spielplatzbau"
                        src="../images/symbol_geraet_238x240.png"
                    />

                    <div className="flex flex-col flex-wrap items-start justify-start gap-(--content-card-padding-double)">
                        <div className="-mt-(--content-card-padding-half) -ml-(--content-card-padding) w-full">
                            <h5 className="relative z-0 w-fit pr-10 pl-(--content-card-padding) text-theme-background before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:bg-theme-dunkelgruen">
                                Spielplatzbau
                            </h5>
                            <hr className="-mt-(--content-card-padding-half) w-[calc(100%-var(--anchored-content-hr-padding)+var(--content-card-padding-double))] text-theme-dunkelgruen" />
                        </div>

                        <div className="text-justify text-pretty">
                            <div className="float-right h-[calc(var(--anchored-content-image-width)*0.5)] w-(--anchored-content-hr-padding) [shape-margin:var(--content-card-padding-double)] [shape-outside:polygon(30%_0%,100%_37.5%,50%_100%)]" />
                            {spielplatzbau.bild && (
                                <div className="float-left mr-(--content-card-padding-double) mb-(--content-card-padding) max-w-(--anchored-content-image-width)">
                                    <img src={spielplatzbau.bild.url} alt="spielplatzbau beschreibungsbild" />
                                </div>
                            )}
                            <span
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: spielplatzbau.text }}
                            />
                        </div>

                        <button className="button self-center">
                            <a href="/pages/spielplatzbau.php">Mehr erfahren!</a>
                        </button>
                    </div>
                </div>
            </section>

            {/* Ga-La Bau */}
            <section id="home-anchor-galabau" className="relative w-(--container-width)">
                <div className="element-level-1 w-full p-(--content-card-padding-double) [--anchored-content-hr-padding:calc(var(--anchored-content-image-width)*0.666)] [--anchored-content-image-width:--spacing(37)] md:[--anchored-content-image-width:--spacing(51)]">
                    <img
                        className="absolute right-0 size-(--anchored-content-image-width) translate-x-1/3 -translate-y-1/3 object-cover drop-shadow-md"
                        alt="galabau"
                        src="../images/symbol_spaten_203x205.png"
                    />

                    <div className="flex flex-col flex-wrap items-start justify-start gap-(--content-card-padding-double)">
                        <div className="-mt-(--content-card-padding-half) -ml-(--content-card-padding) w-full">
                            <h5 className="relative z-0 w-fit pr-10 pl-(--content-card-padding) text-theme-background before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:bg-theme-secondary">
                                Garten- & Landschaftsbau
                            </h5>
                            <hr className="-mt-(--content-card-padding-half) w-[calc(100%-var(--anchored-content-hr-padding)+var(--content-card-padding-half))] text-theme-secondary" />
                        </div>

                        <div className="text-justify text-pretty">
                            <div className="float-right h-[calc(var(--anchored-content-image-width)*0.5)] w-(--anchored-content-hr-padding) [shape-margin:var(--content-card-padding-double)] [shape-outside:polygon(14%_0%,75%_95%,27%_55%)]" />
                            {galabau.bild && (
                                <div className="float-left mr-(--content-card-padding-double) mb-(--content-card-padding) max-w-(--anchored-content-image-width)">
                                    <img src={galabau.bild.url} alt="galabau beschreibungsbild" />
                                </div>
                            )}
                            <span
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: galabau.text }}
                            />
                        </div>

                        <button className="button self-center">
                            <a href="/pages/galabau.php">Mehr erfahren!</a>
                        </button>
                    </div>
                </div>
            </section>

            {/* Naschgarten */}
            <section id="home-anchor-naschgarten" className="relative w-(--container-width)">
                <div className="element-level-1 w-full p-(--content-card-padding-double) [--anchored-content-hr-padding:calc(var(--anchored-content-image-width)*0.666)] [--anchored-content-image-width:--spacing(38)] md:[--anchored-content-image-width:--spacing(52)]">
                    <img
                        className="absolute right-0 size-(--anchored-content-image-width) translate-x-1/3 -translate-y-1/3 object-cover drop-shadow-md"
                        alt="naschgarten"
                        src="../images/symbol_baum_211x211.png"
                    />

                    <div className="flex flex-col flex-wrap items-start justify-start gap-(--content-card-padding-double)">
                        <div className="-mt-(--content-card-padding-half) -ml-(--content-card-padding) w-full">
                            <h5 className="relative z-0 w-fit pr-10 pl-(--content-card-padding) text-theme-background before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:bg-theme-gelb">
                                Naschgarten
                            </h5>
                            <hr className="-mt-(--content-card-padding-half) w-[calc(100%-var(--anchored-content-hr-padding))] text-theme-gelb" />
                        </div>

                        <div className="text-justify text-pretty">
                            <div className="float-right h-[calc(var(--anchored-content-image-width)*0.5)] w-(--anchored-content-hr-padding) [shape-margin:var(--content-card-padding-double)] [shape-outside:polygon(10%_0%,90%_100%,50%_85%,20%_45%)]" />
                            {naschgarten.bild && (
                                <div className="float-left mr-(--content-card-padding-double) mb-(--content-card-padding) max-w-(--anchored-content-image-width)">
                                    <img src={naschgarten.bild.url} alt="naschgarten beschreibungsbild" />
                                </div>
                            )}
                            <span
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: naschgarten.text }}
                            />
                        </div>

                        <button className="button self-center">
                            <a href="/pages/naschgarten.php">Mehr erfahren!</a>
                        </button>
                    </div>
                </div>
            </section>

            <section id="home-anchor-workshops" className="relative w-(--container-width)">
                <div className="element-level-1 w-full p-(--content-card-padding-double) [--anchored-content-hr-padding:calc(var(--anchored-content-image-width)*0.666)] [--anchored-content-image-width:--spacing(38)] md:[--anchored-content-image-width:--spacing(52)]">
                    <img
                        className="absolute right-0 size-(--anchored-content-image-width) translate-x-1/3 -translate-y-1/3 object-cover drop-shadow-md"
                        alt="workshops"
                        src="../images/symbol_buch_210x213.png"
                    />

                    <div className="flex flex-col flex-wrap items-start justify-start gap-(--content-card-padding-double)">
                        <div className="-mt-(--content-card-padding-half) -ml-(--content-card-padding-half) w-full">
                            <h5 className="relative z-0 w-fit pr-10 pl-(--content-card-padding) text-theme-background before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:bg-theme-hellgruen">
                                Workshops
                            </h5>
                            <hr className="-mt-(--content-card-padding-half) w-[calc(100%-var(--anchored-content-hr-padding))] text-theme-hellgruen" />
                        </div>

                        <div className="text-justify text-pretty">
                            <div className="float-right h-[calc(var(--anchored-content-image-width)*0.5)] w-(--anchored-content-hr-padding) [shape-margin:var(--content-card-padding-double)] [shape-outside:polygon(22%_0%,100%_75%,44%_95%,34.5%_48%,26%_44%)]" />
                            {workshops.bild && (
                                <div className="float-left mr-(--content-card-padding-double) mb-(--content-card-padding) max-w-(--anchored-content-image-width)">
                                    <img src={workshops.bild.url} alt="workshops beschreibungsbild" />
                                </div>
                            )}
                            <span
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: workshops.text }}
                            />
                        </div>

                        <button className="button self-center">
                            <a href="/pages/workshops.php">Mehr erfahren!</a>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;

const _AnchorLinks = () => {
    return (
        <div className="-mt-(--content-card-padding-double) flex min-h-(--page-height-no-header-no-footer) w-full flex-col items-stretch justify-center gap-(--content-card-padding-double) sm:w-4/5 md:w-3/5 lg:w-1/2 2xl:w-1/3">
            <a
                href="#home-anchor-spielplatzbau"
                className="element-level-1 group relative flex h-16 flex-row items-center justify-start gap-(--content-card-padding) border-theme-primary-variation bg-theme-primary p-(--content-card-padding) no-underline hover:bg-theme-primary-variation active:bg-theme-primary-variation"
            >
                <div className="aspect-square h-[150%]">
                    <img
                        className="image-hover object-cover drop-shadow-centered-sm drop-shadow-theme-primary-variation/75"
                        alt="spielplatzbau"
                        src="../images/symbol_geraet_238x240.png"
                    />
                </div>
                <h4 className="text-center text-theme-background">Spielplatzbau</h4>
            </a>

            <a
                href="#home-anchor-galabau"
                className="element-level-1 group relative flex h-16 flex-row items-center justify-start gap-(--content-card-padding) border-theme-primary-variation bg-theme-primary p-(--content-card-padding) no-underline hover:bg-theme-primary-variation active:bg-theme-primary-variation"
            >
                <div className="aspect-square h-[150%]">
                    <img
                        className="image-hover object-cover drop-shadow-centered-sm drop-shadow-theme-primary-variation/75"
                        alt="galabau"
                        src="../images/symbol_spaten_203x205.png"
                    />
                </div>
                <h4 className="text-center text-theme-background">Garten- & Landschaftsbau</h4>
            </a>

            <a
                href="#home-anchor-naschgarten"
                className="element-level-1 group relative flex h-16 flex-row items-center justify-start gap-(--content-card-padding) border-theme-primary-variation bg-theme-primary p-(--content-card-padding) no-underline hover:bg-theme-primary-variation active:bg-theme-primary-variation"
            >
                <div className="aspect-square h-[150%]">
                    <img
                        className="image-hover object-cover drop-shadow-centered-sm drop-shadow-theme-primary-variation/75"
                        alt="naschgarten"
                        src="../images/symbol_baum_211x211.png"
                    />
                </div>
                <h4 className="text-center text-theme-background">Naschgarten</h4>
            </a>

            <a
                href="#home-anchor-workshops"
                className="element-level-1 group relative flex h-16 flex-row items-center justify-start gap-(--content-card-padding) border-theme-primary-variation bg-theme-primary p-(--content-card-padding) no-underline hover:bg-theme-primary-variation active:bg-theme-primary-variation"
            >
                <div className="aspect-square h-[150%]">
                    <img
                        className="image-hover object-cover drop-shadow-centered-sm drop-shadow-theme-primary-variation/75"
                        alt="workshops"
                        src="../images/symbol_buch_210x213.png"
                    />
                </div>
                <h4 className="text-center text-theme-background">Workshops</h4>
            </a>
        </div>
    );
};
