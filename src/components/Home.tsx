import { useEffect, useRef, useState } from 'preact/hooks';
import type { ACF_Home_Type, ACF_Image, Leistungsbeschreibungen } from '../types/types';
import NewsItems from './NewsItems';
import { classNames } from 'cpts-javascript-utilities';
import { LEISTUNGEN_BESCHREIBUNGEN } from '../types/consts';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { LoadingSpinner } from './LoadingMessage';

const Home = ({ homeData }: { homeData: ACF_Home_Type }) => {
    const { spielplatzbau, galabau, naschgarten, workshops, video } = homeData;

    useEffect(() => {
        // TODO Scrolls to <section> anchors when page is ready
        // TODO Once hydration vs full-js content is implemented, this will not be necessary
        if (location.hash) {
            const target = document.querySelector(location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const video_Ref = useRef<HTMLVideoElement | null>(null);
    const [canPlay, setCanPlay] = useState(false);

    useEffect(() => {
        if (video_Ref.current && video.url) {
            const videoElem = video_Ref.current;

            const timer = setTimeout(() => {
                videoElem.src = video.url;
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [video.url]);

    return (
        <main className="-mt-(--clipped-margin-and-offset) flex flex-col items-center justify-start gap-y-48 overflow-hidden">
            <div className="relative h-(--page-height-no-header-no-footer) w-dvw">
                <div className="absolute top-0 left-0 -z-10 size-full [clip-path:var(--clip-path-angled-bottom)]">
                    <video
                        ref={video_Ref}
                        poster={video.sizes.large ? video.sizes.large : '/images/1-pixel-black.png'}
                        playsinline
                        muted
                        loop
                        autoPlay
                        className="size-full object-cover"
                        aria-hidden="true"
                        onCanPlay={() => {
                            setCanPlay(true);
                        }}
                    />

                    {!canPlay && (
                        <div className="absolute top-0 left-0 flex size-full items-center justify-center text-theme-primary">
                            <div className="relative">
                                <LoadingSpinner />
                                <div className='absolute size-10 -translate-y-full scale-35 animate-pulse bg-[currentColor] [mask:url("/svg/PlayOutline.svg")]' />
                            </div>
                        </div>
                    )}
                </div>

                <div className="mx-auto flex h-full w-(--container-width) flex-col items-center justify-end">
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
    const { name, imgSrc, anchoredContent, shapeOutside, headerBgClass, hrColorClass } = LEISTUNGEN_BESCHREIBUNGEN[leistung];

    const { isIntersecting, ref } = useIntersectionObserver({
        freezeOnceVisible: true,
        threshold: 0.5,
    });

    return (
        <section
            id={`home-anchor-${leistung}`}
            ref={ref}
            className={classNames('relative w-(--container-width) transition-[opacity] duration-700', isIntersecting ? 'opacity-100' : 'opacity-0')}
        >
            <div
                className={`element-level-1 w-full p-(--content-card-padding-double) [--anchored-content-hr-padding:calc(var(--anchored-content-image-width)*0.666)] ${
                    anchoredContent
                }`}
            >
                <img
                    className="absolute right-0 size-(--anchored-content-image-width) translate-x-1/5 -translate-y-1/3 object-cover drop-shadow-md drop-shadow-black/40 md:translate-x-1/3"
                    alt={name}
                    src={imgSrc}
                />

                <div className="flex flex-col flex-wrap items-start justify-start gap-(--content-card-padding-double)">
                    <div className="-mt-(--content-card-padding-half) -ml-(--content-card-padding) w-full">
                        <h5
                            className={classNames(
                                'relative z-0 my-0 w-fit pr-10 pl-(--content-card-padding) text-theme-background capitalize before:absolute before:top-0 before:left-0 before:-z-10 before:size-full',
                                headerBgClass,
                            )}
                        >
                            {name}
                        </h5>
                        <hr
                            className={classNames(
                                '-mt-(--content-card-padding-half) w-[calc(100%-var(--anchored-content-hr-padding)+var(--content-card-padding))]',
                                hrColorClass,
                            )}
                        />
                    </div>

                    <div className="text-pretty">
                        <div
                            className={`float-right h-[calc(var(--anchored-content-image-width)*0.5)] w-(--anchored-content-hr-padding) [shape-margin:var(--content-card-padding-double)] ${
                                shapeOutside
                            }`}
                        />
                        {bild && (
                            <div className="float-left mr-(--content-card-padding-double) mb-(--content-card-padding) max-w-(--anchored-content-image-width) element-level-2">
                                <img src={bild.url} alt={`${name} beschreibungsbild`} />
                            </div>
                        )}
                        <span
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    </div>

                    <a href={`/pages/${leistung}.php`} className="button-cta self-center">
                        Mehr erfahren!
                    </a>
                </div>
            </div>
        </section>
    );
};
