/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef, useState } from 'preact/hooks';
import useFetchNews from '../hooks/useFetchNews';
import { classNames, keyDownA11y } from 'cpts-javascript-utilities';
import type { TargetedKeyboardEvent } from 'preact';
import type { ACF_Nachricht_Type } from '../types/types';
import { useBreakpoint } from '../hooks/useBreakpoint';

const newsItemsPerBreakpoint = new Map([
    [null, 1],
    ['sm', 1],
    ['md', 2],
    ['lg', 3],
    ['xl', 3],
    ['2xl', 3],
]);

const NewsItems = () => {
    const breakpoint = useBreakpoint();
    const newsItemsPerPage = newsItemsPerBreakpoint.get(breakpoint)!;

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
            <div className="element-level-1 flex h-3/5 w-full flex-col p-(--content-card-padding-double)">
                <div className="mb-(--content-card-padding) flex items-start justify-between">
                    <h2 className="my-0 text-left text-theme-primary-variation">Neuigkeiten:</h2>

                    {/* Left / Right Buttons */}
                    {totalPages && (
                        <div className="flex items-start justify-between gap-2">
                            {/* Back (newer) */}
                            <button
                                className={classNames(
                                    'group size-6 rounded-full p-1',
                                    newsPage <= totalPages && newsPage > 1 ? 'cursor-pointer bg-neutral-200' : 'cursor-not-allowed bg-neutral-100',
                                )}
                                onClick={() => {
                                    if (newsPage <= totalPages && newsPage > 1) {
                                        setNewsPage((old) => old - 1);
                                    }
                                }}
                            >
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className={classNames(
                                            'mx-auto size-full -translate-x-px',
                                            newsPage <= totalPages && newsPage > 1
                                                ? 'text-theme-text/50 group-hover:text-theme-text group-active:text-theme-text'
                                                : 'text-theme-text/20',
                                        )}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </div>
                            </button>

                            {/* Forward (older) */}
                            <button
                                className={classNames(
                                    'group size-6 rounded-full p-1',
                                    newsPage < totalPages ? 'cursor-pointer bg-neutral-200' : 'cursor-not-allowed bg-neutral-100',
                                )}
                                onClick={() => {
                                    if (newsPage < totalPages) {
                                        setNewsPage((old) => old + 1);
                                    }
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className={classNames(
                                        'mx-auto size-full translate-x-px',
                                        newsPage < totalPages
                                            ? 'text-theme-text/50 group-hover:text-theme-text group-active:text-theme-text'
                                            : 'text-theme-text/20',
                                    )}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
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
                                  className="flex items-center justify-center element-level-2 p-(--content-card-padding) text-left text-theme-primary opacity-60 select-none"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="size-12 animate-spin"
                                  >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
                                      />
                                  </svg>
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
                            {/* {totalPages && (
                                <div className="flex items-center justify-between gap-4">
                                    <button
                                        className={classNames(
                                            'text-xl',
                                            totalPages <= newsPage ? 'cursor-pointer text-theme-text' : 'cursor-not-allowed text-theme-text/50',
                                        )}
                                        onClick={() => {
                                            if (totalPages <= newsPage) {
                                                setNewsPage((old) => old - 1);
                                            }
                                        }}
                                    >
                                        &lt;
                                    </button>
                                    <button
                                        className={classNames(
                                            'text-xl',
                                            totalPages > newsPage ? 'cursor-pointer text-theme-text' : 'cursor-not-allowed text-theme-text/50',
                                        )}
                                        onClick={() => {
                                            if (totalPages > newsPage) {
                                                setNewsPage((old) => old + 1);
                                            }
                                        }}
                                    >
                                        &gt;
                                    </button>
                                </div>
                            )} */}

                            <button
                                className="group -mt-(--content-card-padding) -mr-(--content-card-padding) size-6 cursor-pointer rounded-full bg-neutral-200 p-1"
                                onClick={() => handleClick(null)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="size-full text-theme-text/50 transition-[color] group-hover:text-theme-text group-active:text-theme-text"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
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
