/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef, useState } from 'preact/hooks';
import useFetchNews from '../hooks/useFetchNews';
import { keyDownA11y } from 'cpts-javascript-utilities';
import type { TargetedKeyboardEvent } from 'preact';
import type { ACF_Nachricht_Type } from '../types/types';

const NewsItems = () => {
    const news = useFetchNews();

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
                <h2 className="mb-(--content-card-padding) text-left">Neuigkeiten:</h2>

                <div className="relative mx-auto grid h-auto w-full grid-cols-1 gap-(--content-card-padding-double) md:grid-cols-3">
                    {news &&
                        news.map((newsItem) => (
                            <button
                                key={newsItem.titel + newsItem.datum}
                                className="element-level-2 relative min-h-fit cursor-pointer overflow-hidden p-(--content-card-padding) select-none"
                                onClick={() => handleClick(newsItem)}
                            >
                                <h4 className="mb-(--content-card-padding-half) text-white">{newsItem.titel}</h4>
                                <h6 className="mb-(--content-card-padding-half) text-white">{newsItem.datum}</h6>
                                <div
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{ __html: newsItem.text }}
                                    className="relative line-clamp-10 after:absolute after:right-0 after:bottom-0 after:h-5 after:w-1/4 after:bg-linear-90 after:from-transparent after:to-theme-primary-variation"
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
                    <div className="element-level-1 mx-auto mt-[calc(var(--header-footer-margin)+2*var(--header-footer-offset))] flex h-3/4 w-1/2 cursor-default flex-col items-start justify-start gap-y-(--content-card-padding-half) p-(--content-card-padding)">
                        <h4 className="cursor-text text-theme-primary">{newsModalContent.titel}</h4>
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
