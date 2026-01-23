import { useEffect } from 'preact/hooks';
import type { ACF_Home_Type, ACF_Image, Leistungsbeschreibungen } from '../types/types';
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
            <div className="relative h-(--page-height-no-header-no-footer) w-dvw">
                <div className="absolute top-0 left-0 -z-10 -mt-[calc(var(--header-footer-margin)+var(--header-footer-offset))] h-[calc(var(--page-height-no-header-no-footer)+var(--header-footer-margin))] w-full [clip-path:polygon(0%_var(--header-footer-offset),100%_0%,100%_calc(100%-var(--header-footer-offset)),0%_100%)]">
                    <div className="absolute size-full bg-linear-0 from-theme-background/25 via-theme-primary/50 to-theme-background/25 bg-size-[auto_5px] bg-repeat" />
                    <video src={video.url} preload="auto" muted loop autoPlay className="size-full object-cover" />
                </div>

                <div className="mx-auto flex h-full w-(--container-width) flex-col items-center justify-between">
                    <h1 className="self-start text-theme-background">Willkommen bei der Spielplatzwerkstatt!</h1>

                    {/* News / Insta: */}
                    <NewsItems />
                </div>
            </div>

            {/* Anchored Elements: */}
            <Leistungsbeschreibung leistung="spielplatzbau" beschreibungsData={spielplatzbau} />
            <Leistungsbeschreibung leistung="galabau" beschreibungsData={galabau} />
            <Leistungsbeschreibung leistung="naschgarten" beschreibungsData={naschgarten} />
            <Leistungsbeschreibung leistung="workshops" beschreibungsData={workshops} />
        </main>
    );
};

export default Home;

const Leistungsbeschreibung = ({
    leistung,
    beschreibungsData,
}: {
    leistung: keyof Leistungsbeschreibungen;
    beschreibungsData: { text: string; bild: ACF_Image | false };
}) => {
    const { text, bild } = beschreibungsData;
    const { imgSrc, anchoredContent, shapeOutside } = leistungsbeschreibungenCustom[leistung];

    return (
        <section id={`home-anchor-${leistung}`} className="relative w-(--container-width)">
            <div
                className={`element-level-1 w-full p-(--content-card-padding-double) [--anchored-content-hr-padding:calc(var(--anchored-content-image-width)*0.666)] ${
                    anchoredContent
                }`}
            >
                <img
                    className="absolute right-0 size-(--anchored-content-image-width) translate-x-1/3 -translate-y-1/3 object-cover drop-shadow-md drop-shadow-black/40"
                    alt={leistung}
                    src={imgSrc}
                />

                <div className="flex flex-col flex-wrap items-start justify-start gap-(--content-card-padding-double)">
                    <div className="-mt-(--content-card-padding-half) -ml-(--content-card-padding) w-full">
                        <h5 className="relative z-0 w-fit pr-10 pl-(--content-card-padding) text-theme-background capitalize before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:bg-theme-dunkelgruen">
                            {leistung}
                        </h5>
                        <hr className="-mt-(--content-card-padding-half) w-[calc(100%-var(--anchored-content-hr-padding)+var(--content-card-padding-double))] text-theme-dunkelgruen" />
                    </div>

                    <div className="text-justify text-pretty">
                        <div
                            className={`float-right h-[calc(var(--anchored-content-image-width)*0.5)] w-(--anchored-content-hr-padding) [shape-margin:var(--content-card-padding-double)] ${
                                shapeOutside
                            }`}
                        />
                        {bild && (
                            <div className="float-left mr-(--content-card-padding-double) mb-(--content-card-padding) max-w-(--anchored-content-image-width) element-level-2">
                                <img src={bild.url} alt={`${leistung} beschreibungsbild`} />
                            </div>
                        )}
                        <span
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    </div>

                    <a href={`/pages/${leistung}.php`} className="button self-center">
                        Mehr erfahren!
                    </a>
                </div>
            </div>
        </section>
    );
};

const leistungsbeschreibungenCustom = {
    spielplatzbau: {
        imgSrc: '../images/symbol_geraet_238x240.png',
        anchoredContent: /* tw */ '[--anchored-content-image-width:--spacing(40)] md:[--anchored-content-image-width:--spacing(60)]',
        shapeOutside: /* tw */ '[shape-outside:polygon(30%_0%,100%_37.5%,50%_100%)]',
    },
    galabau: {
        imgSrc: '../images/symbol_spaten_203x205.png',
        anchoredContent: /* tw */ '[--anchored-content-image-width:--spacing(37)] md:[--anchored-content-image-width:--spacing(51)]',
        shapeOutside: /* tw */ '[shape-outside:polygon(14%_0%,75%_95%,27%_55%)]',
    },
    naschgarten: {
        imgSrc: '../images/symbol_baum_211x211.png',
        anchoredContent: /* tw */ '[--anchored-content-image-width:--spacing(38)] md:[--anchored-content-image-width:--spacing(52)]',
        shapeOutside: /* tw */ '[shape-outside:polygon(10%_0%,90%_100%,50%_85%,20%_45%)]',
    },
    workshops: {
        imgSrc: '../images/symbol_buch_210x213.png',
        anchoredContent: /* tw */ '[--anchored-content-image-width:--spacing(38)] md:[--anchored-content-image-width:--spacing(52)]',
        shapeOutside: /* tw */ '[shape-outside:polygon(22%_0%,100%_75%,44%_95%,34.5%_48%,26%_44%)]',
    },
};
