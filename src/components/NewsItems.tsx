import { useEffect, useState } from 'preact/hooks';

const NewsItems = () => {
    const [news, setNews] = useState();

    useEffect(() => {
        fetch(`http://spielplatzwerkstatt.de.w020ef07.kasserver.com/cms/wp-json/wp/v2/nachricht`)
            .then((response) => response.json())
            .then((response) => {
                const parsed = response.map((res) => ({ ...res.acf, titel: res.title.rendered }));
                console.log('%c[NewsItems]', 'color: #921388', `parsed :`, parsed);
                setNews(parsed);
            });
    }, []);

    return (
        <div className="element-level-1 h-2/3 w-full p-(--content-card-padding-double)">
            <h2 className="mb-(--content-card-padding) text-center">Neuigkeiten:</h2>

            <div className="mx-auto grid w-full grid-cols-1 gap-(--content-card-padding-double) md:grid-cols-3">
                {news &&
                    news.map((nIt) => (
                        <div className="element-level-2 h-auto cursor-pointer overflow-hidden p-(--content-card-padding) select-none hover:bg-theme-primary/90 active:bg-theme-primary/90">
                            <h4 className="mb-(--content-card-padding-half) text-white">{nIt.titel}</h4>
                            <h6 className="mb-(--content-card-padding-half) text-white">{nIt.datum}</h6>
                            <div dangerouslySetInnerHTML={{ __html: nIt.text }} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default NewsItems;
