/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef, useState } from 'preact/hooks';
import useFetchNews from '../hooks/useFetchNews';
import { classNames, keyDownA11y } from 'cpts-javascript-utilities';
import type { TargetedKeyboardEvent } from 'preact';
import type { ACF_Nachricht_Type } from '../types/types';
import { useBreakpoint } from '../hooks/useBreakpoint';

const NewsItems = () => {
    const breakPoint = useBreakpoint();
    const newsItemsPerPage = breakPoint === null || breakPoint === 'sm' ? 1 : 3;

    const [newsPage, setNewsPage] = useState(1);
    const { news, totalPages, totalPosts: _totalPosts } = useFetchNews(newsPage, newsItemsPerPage);

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
            <div className="element-level-1 relative h-auto w-full p-(--content-card-padding-double)">
                <div className="flex items-start justify-between">
                    <h2 className="mb-(--content-card-padding) text-left text-theme-primary-variation">Neuigkeiten:</h2>

                    {totalPages && (
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
                    )}
                </div>

                <div className="relative mx-auto grid h-auto w-full grid-cols-1 gap-(--content-card-padding-double) [--news-item-line-clamp:10] md:grid-cols-3">
                    {news &&
                        news.map((newsItem) => (
                            <button
                                key={newsItem.titel + newsItem.datum}
                                className="element-level-2-interactive relative flex min-h-fit cursor-pointer flex-col items-start overflow-hidden p-(--content-card-padding) text-left select-none"
                                onClick={() => handleClick(newsItem)}
                            >
                                <h4 className="mb-(--content-card-padding-half) text-white">{newsItem.titel}</h4>
                                <h6 className="mb-(--content-card-padding-half) text-white">{newsItem.datum}</h6>
                                <div
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{ __html: newsItem.text }}
                                    className="relative line-clamp-(--news-item-line-clamp) h-[calc(var(--news-item-line-clamp)*var(--text-sm)*var(--tw-leading,var(--text-sm--line-height)))] w-full overflow-hidden text-sm text-pretty after:absolute after:right-0 after:bottom-0 after:h-5 after:w-1/4 after:bg-linear-90 after:from-transparent after:to-theme-primary-variation"
                                />
                            </button>
                        ))}
                </div>
            </div>

            <dialog
                ref={dialogRef}
                className="h-dvh max-h-dvh w-dvw max-w-dvw cursor-pointer overflow-hidden bg-theme-background/20 backdrop-blur-md"
                onClick={(ev) => ev.target === ev.currentTarget && ev.currentTarget.open && handleClick(null)}
                onKeyDown={keyDownA11y(
                    (ev: TargetedKeyboardEvent<HTMLDialogElement>) => ev.target === ev.currentTarget && ev.currentTarget.open && handleClick(null),
                )}
            >
                {newsModalContent && (
                    <div className="element-level-1 mx-auto mt-[calc(var(--header-footer-margin)+2*var(--header-footer-offset))] flex h-3/4 w-1/2 cursor-default flex-col items-start justify-start gap-y-(--content-card-padding-half) p-(--content-card-padding) shadow-level-4">
                        <div className="pointer-events-auto flex w-full items-start justify-between">
                            <h4 className="cursor-text text-theme-primary">{newsModalContent.titel}</h4>
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
                                className="-mt-(--content-card-padding) cursor-pointer text-xl text-theme-text/50 transition-[color] hover:text-theme-text"
                                onClick={() => handleClick(null)}
                            >
                                &#x2716;
                            </button>
                        </div>

                        <h6 className="cursor-text text-theme-primary-variation">{newsModalContent.datum}</h6>
                        <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: newsModalContent.text }}
                            className="cursor-text"
                        />
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
