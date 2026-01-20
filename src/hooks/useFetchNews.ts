import { useEffect, useState } from 'preact/hooks';
import type { ACF_Nachricht_Type, ACF_Property } from '../types/types';

const useFetchNews = (pageNumber: number, resultsPerPage: number) => {
    const [totals, setTotals] = useState<{ totalPosts: number; totalPages: number }>();
    const [news, setNews] = useState<ACF_Nachricht_Type[]>();

    useEffect(() => {
        fetch(
            `http://spielplatzwerkstatt.de.w020ef07.kasserver.com/cms/wp-json/wp/v2/nachricht?orderby=datum&order=desc&per_page=${resultsPerPage}&page=${pageNumber}`,
        )
            .then((response) => {
                const totalPosts = response.headers.get('X-WP-Total');
                const totalPages = response.headers.get('X-WP-TotalPages');

                if (totalPosts && totalPages) {
                    setTotals({ totalPosts: parseInt(totalPosts, 10), totalPages: parseInt(totalPages, 10) });
                }
                return response.json();
            })
            .then((response: ACF_Property[]) => {
                const parsed = response.map((res) => ({ ...res.acf, titel: res.title!.rendered }) as ACF_Nachricht_Type);
                setNews(parsed);
            });
    }, [pageNumber, resultsPerPage]);

    return { news, ...totals };
};

export default useFetchNews;
