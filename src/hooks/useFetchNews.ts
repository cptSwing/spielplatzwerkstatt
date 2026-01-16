import { useEffect, useState } from 'preact/hooks';
import type { ACF_Nachricht_Type, ACF_Property } from '../types/types';

const useFetchNews = () => {
    const [news, setNews] = useState<ACF_Nachricht_Type[]>();

    useEffect(() => {
        fetch(`http://spielplatzwerkstatt.de.w020ef07.kasserver.com/cms/wp-json/wp/v2/nachricht`)
            .then((response) => response.json())
            .then((response: ACF_Property[]) => {
                const parsed = response.map((res) => ({ ...res.acf, titel: res.title!.rendered }) as ACF_Nachricht_Type);
                setNews(parsed);
            });
    }, []);

    return news;
};

export default useFetchNews;
