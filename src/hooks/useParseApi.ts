import { useEffect, useState } from 'preact/compat';
import type { ACF_Contacts_Type, ACF_Home_Type, ACF_Leistung_Type, ACF_Property, ArrayElement } from '../types/types';
import { type ROUTES } from '../types/consts';

const useParseApi = () => {
    const [route, setRoute] = useState<ArrayElement<typeof ROUTES>>();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [apiResult, setApiResult] = useState<ACF_Leistung_Type | ACF_Home_Type | ACF_Contacts_Type | null>(null);

    useEffect(() => {
        const frontendRoot = document.getElementById('frontend-root');
        if (frontendRoot) {
            const dataRoute = frontendRoot.dataset.route as ArrayElement<typeof ROUTES> | undefined;

            if (dataRoute) {
                setRoute(dataRoute);

                const dataApiString = frontendRoot.dataset.api;
                if (dataApiString) {
                    const parsedData: ACF_Property[] = JSON.parse(dataApiString);

                    if (parsedData.length) {
                        switch (dataRoute) {
                            case 'home':
                                setApiResult(parsedData[0].acf as ACF_Home_Type);
                                break;

                            case 'kontakt':
                                setApiResult(parsedData[0].acf as ACF_Contacts_Type);
                                break;

                            default:
                                setApiResult(parsedData[0].acf as ACF_Leistung_Type);
                                break;
                        }
                    }
                }
            }
        }

        setHasLoaded(true);
    }, []);

    return { route, hasLoaded, apiResult };
};

export default useParseApi;
