import { useEffect, useState } from 'preact/hooks';
import type { ACF_Nachricht_Type, ACF_Property } from '../types/types';

const useFetchNews = (pageNumber: number, resultsPerPage: number) => {
    const [totalPosts, setTotalPosts] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [news, setNews] = useState<ACF_Nachricht_Type[]>();
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        setHasLoaded(false);

        try {
            fetch(`https://spielplatzwerkstatt.eu/cms/wp-json/wp/v2/nachricht?orderby=datum&order=desc&per_page=${resultsPerPage}&page=${pageNumber}`)
                .then((response) => {
                    const totalPosts = response.headers.get('X-WP-Total');
                    const totalPages = response.headers.get('X-WP-TotalPages');

                    if (totalPosts && totalPages) {
                        setTotalPosts(parseInt(totalPosts, 10));
                        setTotalPages(parseInt(totalPages, 10));

                        return response.json();
                    }
                })
                .then((response: ACF_Property[]) => {
                    const parsed = response.map((res) => ({ ...res.acf, titel: res.title!.rendered }) as ACF_Nachricht_Type);
                    setNews(parsed);
                    setHasLoaded(true);
                });
        } catch (error) {
            throw error;
        }
    }, [pageNumber, resultsPerPage]);

    return { newsHaveLoaded: hasLoaded, news, totalPosts, totalPages };
};

export default useFetchNews;
