import { useEffect, useState } from 'preact/compat';
import type { ACF_Leistung_Type, ACF_Leistungsbeschreibung_Type, ACF_Property, ArrayElement, Leistungsbeschreibungen } from '../types/types';
import { type ROUTES } from '../types/consts';

const useParseApi = () => {
    const [route, setRoute] = useState<ArrayElement<typeof ROUTES>>();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [apiResult, setApiResult] = useState<ACF_Leistung_Type | Leistungsbeschreibungen | null>(null);

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
                        let acf: ACF_Leistung_Type | Leistungsbeschreibungen;

                        if (dataRoute === 'home') {
                            const acfBeschr = {} as Leistungsbeschreibungen;
                            parsedData.forEach((data) => {
                                switch (data.slug) {
                                    case 'spielplatzbau':
                                        acfBeschr['spielplatzbau'] = data.acf as ACF_Leistungsbeschreibung_Type;
                                        break;
                                    case 'galabau':
                                        acfBeschr['galabau'] = data.acf as ACF_Leistungsbeschreibung_Type;
                                        break;
                                    case 'naschgarten':
                                        acfBeschr['naschgarten'] = data.acf as ACF_Leistungsbeschreibung_Type;
                                        break;
                                    case 'workshops':
                                        acfBeschr['workshops'] = data.acf as ACF_Leistungsbeschreibung_Type;
                                        break;
                                }
                            });

                            acf = acfBeschr;
                        } else {
                            acf = parsedData[0].acf as ACF_Leistung_Type;
                        }
                        setApiResult(acf);
                    }
                }
            }
        }

        setHasLoaded(true);
    }, []);

    return { route, hasLoaded, apiResult };
};

export default useParseApi;
