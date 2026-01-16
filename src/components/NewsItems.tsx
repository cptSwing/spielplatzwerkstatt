import useFetchNews from '../hooks/useFetchNews';

const NewsItems = () => {
    const news = useFetchNews();

    return (
        <div className="element-level-1 h-2/3 w-full p-(--content-card-padding-double)">
            <h2 className="mb-(--content-card-padding) text-left">Neuigkeiten:</h2>

            <div className="relative mx-auto grid h-auto w-full grid-cols-1 gap-(--content-card-padding-double) md:grid-cols-3">
                {news &&
                    news.map((nIt) => (
                        <div
                            key={nIt.titel + nIt.datum}
                            className="element-level-2 relative min-h-fit cursor-pointer overflow-hidden p-(--content-card-padding) select-none"
                        >
                            <h4 className="mb-(--content-card-padding-half) text-white">{nIt.titel}</h4>
                            <h6 className="mb-(--content-card-padding-half) text-white">{nIt.datum}</h6>
                            <div
                                dangerouslySetInnerHTML={{ __html: nIt.text }}
                                className="relative after:absolute after:right-0 after:bottom-0 after:h-5 after:w-1/4 after:bg-linear-90 after:from-transparent after:to-theme-primary-variation"
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default NewsItems;
