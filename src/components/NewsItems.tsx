/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import useFetchNews from '../hooks/useFetchNews';
import { classNames, keyDownA11y } from 'cpts-javascript-utilities';
import type { TargetedKeyboardEvent } from 'preact';
import type { ACF_Nachricht_Type } from '../types/types';
import { LoadingSpinner } from './LoadingMessage';
import { BreakpointContext } from '../lib/BreakpointContext';
import type { BreakpointName } from '../hooks/useBreakpoint';

const newsItemsPerBreakpoint = new Map<BreakpointName, number>([
    ['base', 1],
    ['sm', 1],
    ['md', 2],
    ['lg', 3],
    ['xl', 3],
    ['2xl', 3],
]);

const NewsItems = () => {
    const breakpoint = useContext(BreakpointContext);
    const [newsItemsPerPage, setNewsItemsPerPage] = useState<number | null>(null);

    useEffect(() => {
        const bp = newsItemsPerBreakpoint.get(breakpoint);
        bp && setNewsItemsPerPage(bp);
    }, [breakpoint]);

    const [newsPage, setNewsPage] = useState(1);
    const { newsHaveLoaded, news, totalPages, totalPosts: _totalPosts } = useFetchNews(newsPage, newsItemsPerPage);

    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [newsModalContent, setNewsModalContent] = useState<ACF_Nachricht_Type | null>(null);

    useEffect(() => {
        if (dialogRef.current) {
            if (newsModalContent) {
                dialogRef.current.showModal();
            } else {
                dialogRef.current.close();
            }
        }
    }, [newsModalContent]);

    return (
        <>
            <div id="home-anchor-news" className="element-level-1 flex h-2/5 w-full flex-col p-(--content-card-padding-double) md:h-2/5">
                <div className="mb-1 flex items-start justify-between">
                    <h4 className="my-0 text-left tracking-tight text-theme-primary-variation">Neuigkeiten:</h4>

                    {/* Left / Right Buttons */}
                    {totalPages && (
                        <div className="flex items-start justify-between gap-2">
                            {/* Back (newer) */}
                            <button
                                className={classNames(
                                    'group size-6 rounded-full p-1 transition-[background-color] xl:size-5.5',
                                    newsPage <= totalPages && newsPage > 1 ? 'cursor-pointer bg-neutral-200' : 'cursor-not-allowed bg-neutral-100',
                                )}
                                onClick={() => {
                                    if (newsPage <= totalPages && newsPage > 1) {
                                        setNewsPage((old) => old - 1);
                                    }
                                }}
                            >
                                <div
                                    className={classNames(
                                        'size-full transition-[background-color] duration-100 [mask:url("/svg/ChevronLeftOutline.svg")]',
                                        newsPage <= totalPages && newsPage > 1
                                            ? 'bg-theme-text/50 group-hover:bg-theme-text group-active:bg-theme-text'
                                            : 'bg-theme-text/20',
                                    )}
                                />
                            </button>

                            {/* Forward (older) */}
                            <button
                                className={classNames(
                                    'group size-6 rounded-full p-1 transition-[background-color] xl:size-5.5',
                                    newsPage < totalPages ? 'cursor-pointer bg-neutral-200' : 'cursor-not-allowed bg-neutral-100',
                                )}
                                onClick={() => {
                                    if (newsPage < totalPages) {
                                        setNewsPage((old) => old + 1);
                                    }
                                }}
                            >
                                <div
                                    className={classNames(
                                        'size-full transition-[background-color] duration-100 [mask:url("/svg/ChevronRightOutline.svg")]',
                                        newsPage < totalPages ? 'bg-theme-text/50 group-hover:bg-theme-text group-active:bg-theme-text' : 'bg-theme-text/20',
                                    )}
                                />
                            </button>
                        </div>
                    )}
                </div>

                <div className="grid min-h-0 flex-1 grid-cols-1 grid-rows-1 gap-x-(--content-card-padding) md:grid-cols-2 lg:grid-cols-3">
                    {newsHaveLoaded
                        ? news &&
                          news.map((newsItem) => (
                              <button
                                  key={newsItem.titel + newsItem.datum}
                                  className="element-level-2-interactive relative flex cursor-pointer flex-col items-start overflow-hidden text-left select-none"
                                  onClick={() => handleClick(newsItem)}
                              >
                                  <h5 className="absolute bottom-0 left-(--content-card-padding) my-0 text-white">{newsItem.titel}</h5>

                                  {newsItem.bild && <img src={newsItem.bild.sizes.medium} alt={`${newsItem.titel} bild`} className="size-full object-cover" />}
                              </button>
                          ))
                        : Array.from({ length: newsItemsPerPage ?? 1 }, (_, idx) => (
                              <div
                                  key={idx}
                                  className="flex items-center justify-center element-level-2 p-(--content-card-padding) text-theme-primary opacity-80 select-none"
                              >
                                  <LoadingSpinner />
                              </div>
                          )).map((elem) => elem)}
                </div>
            </div>

            {/* Open Modal: */}
            <dialog
                ref={dialogRef}
                className="h-dvh max-h-dvh w-dvw max-w-dvw cursor-pointer items-center justify-center bg-theme-background/20 open:flex open:backdrop-blur-md"
                onClick={(ev) => ev.target === ev.currentTarget && ev.currentTarget.open && handleClick(null)}
                onKeyDown={keyDownA11y(
                    (ev: TargetedKeyboardEvent<HTMLDialogElement>) => ev.target === ev.currentTarget && ev.currentTarget.open && handleClick(null),
                )}
            >
                {newsModalContent && (
                    <div className="element-level-1 md:4/5 relative mx-auto flex h-4/5 w-[90%] cursor-default flex-col items-start justify-start gap-y-(--content-card-padding-half) shadow-level-4 transition-transform duration-1000 lg:w-2/3 xl:w-1/2">
                        <div className="pointer-events-auto flex w-full flex-wrap items-start justify-between p-(--content-card-padding-double)">
                            <h4 className="-mt-(--content-card-padding) mb-0 cursor-text text-theme-primary">{newsModalContent.titel}</h4>

                            <button
                                className="group -mt-(--content-card-padding) -mr-(--content-card-padding) size-6 cursor-pointer rounded-full bg-neutral-200 p-1"
                                onClick={() => handleClick(null)}
                            >
                                <div className='size-full bg-theme-text/50 [mask:url("/svg/XMarkOutline.svg")] group-hover:bg-theme-text group-active:bg-theme-text' />
                            </button>

                            <h6 className="my-0 basis-full cursor-text text-theme-primary-variation">{newsModalContent.datum}</h6>
                        </div>

                        <div className="mb-(--content-card-padding-double) overflow-y-auto p-(--content-card-padding-double) pt-0">
                            {newsModalContent.bild && (
                                <a
                                    className="float-left mb-2 block w-full rounded-xs outline-2 -outline-offset-2 outline-theme-primary md:mr-2 md:w-2/3 lg:w-1/2"
                                    href={newsModalContent.bild.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={newsModalContent.bild.sizes.large} alt={`${newsModalContent.titel} bild`} className="object-cover" />
                                </a>
                            )}

                            <div
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: newsModalContent.text }}
                                className="cursor-text text-pretty"
                            />
                        </div>
                    </div>
                )}
            </dialog>
        </>
    );

    function handleClick(newsItem: ACF_Nachricht_Type | null) {
        setNewsModalContent(newsItem);
    }
};

export default NewsItems;
