/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import useFetchNews from '../hooks/useFetchNews';
import { classNames, keyDownA11y } from 'cpts-javascript-utilities';
import type { TargetedKeyboardEvent } from 'preact';
import type { ACF_Nachricht_Type } from '../types/types';
import { LoadingSpinner } from './LoadingMessage';
import { BreakpointContext } from '../lib/BreakpointContext';

const newsItemsPerBreakpoint = new Map([
    ['base', 1],
    ['sm', 1],
    ['md', 2],
    ['lg', 3],
    ['xl', 3],
    ['2xl', 3],
]);

const NewsItems = () => {
    const breakpoint = useContext(BreakpointContext);
    const [newsItemsPerPage, setNewsItemsPerPage] = useState(1);
    useEffect(() => {
        if (breakpoint) {
            setNewsItemsPerPage(newsItemsPerBreakpoint.get(breakpoint)!);
        }
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
            <div id="home-anchor-news" className="element-level-1 flex h-3/5 w-full flex-col p-(--content-card-padding-double)">
                <div className="mb-(--content-card-padding) flex items-start justify-between">
                    <h2 className="my-0 text-left text-theme-primary-variation">Neuigkeiten:</h2>

                    {/* Left / Right Buttons */}
                    {totalPages && (
                        <div className="flex items-start justify-between gap-2">
                            {/* Back (newer) */}
                            <button
                                className={classNames(
                                    'group size-6 rounded-full p-1 transition-[background-color]',
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
                                    'group size-6 rounded-full p-1 transition-[background-color]',
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

                <div className="grid min-h-0 flex-1 grid-cols-1 grid-rows-1 gap-x-(--content-card-padding-double) md:grid-cols-2 lg:grid-cols-3">
                    {newsHaveLoaded
                        ? news &&
                          news.map((newsItem) => (
                              <button
                                  key={newsItem.titel + newsItem.datum}
                                  className="element-level-2-interactive flex cursor-pointer flex-col items-start p-(--content-card-padding) text-left select-none"
                                  onClick={() => handleClick(newsItem)}
                              >
                                  <h4 className="mt-0 mb-1 text-white">{newsItem.titel}</h4>
                                  <h6 className="mt-0 mb-1 font-thin text-neutral-200">{newsItem.datum}</h6>

                                  <div className="w-full overflow-hidden">
                                      {newsItem.bild && (
                                          <div className="mb-1">
                                              <img src={newsItem.bild.sizes.medium} alt={`${newsItem.titel} bild`} className="w-full object-cover" />
                                          </div>
                                      )}

                                      <div
                                          // eslint-disable-next-line react/no-danger
                                          dangerouslySetInnerHTML={{ __html: newsItem.text }}
                                          className="relative overflow-hidden !text-sm text-pretty after:absolute after:right-0 after:bottom-0 after:h-5 after:w-1/4 after:bg-linear-90 after:from-transparent after:to-theme-primary-variation after:to-50%"
                                      />
                                  </div>
                              </button>
                          ))
                        : Array.from({ length: newsItemsPerPage }, (_, idx) => (
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
                className="h-dvh max-h-dvh w-dvw max-w-dvw cursor-pointer overflow-hidden bg-theme-background/20 backdrop-blur-md"
                onClick={(ev) => ev.target === ev.currentTarget && ev.currentTarget.open && handleClick(null)}
                onKeyDown={keyDownA11y(
                    (ev: TargetedKeyboardEvent<HTMLDialogElement>) => ev.target === ev.currentTarget && ev.currentTarget.open && handleClick(null),
                )}
            >
                {newsModalContent && (
                    <div className="element-level-1 md:4/5 relative mx-auto mt-[calc(var(--header-footer-margin)+2*var(--header-footer-offset))] flex h-4/5 w-[90%] cursor-default flex-col items-start justify-start gap-y-(--content-card-padding-half) shadow-level-4 lg:w-2/3 xl:w-1/2">
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

                        <div className="mb-(--content-card-padding-double) overflow-y-auto p-(--content-card-padding-double)">
                            {newsModalContent.bild && (
                                <a
                                    className="float-left mb-2 block w-full md:mr-2 md:w-2/3 lg:w-1/2"
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
