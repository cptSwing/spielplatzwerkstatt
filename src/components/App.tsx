import { lazy, Suspense } from 'preact/compat';
import { useEffect, useState } from 'preact/hooks';
import type { ROUTES } from '../types/consts';
import type { ACF_Leistung_Type, ACF_Property, ArrayElement } from '../types/types';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';

const Home = lazy(() => import('./Home'));
const Leistungen = lazy(() => import('./Leistungen'));

const App = () => {
    const [route, setRoute] = useState<ArrayElement<typeof ROUTES>>();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [apiResult, setApiResult] = useState<ACF_Leistung_Type | null>(null);

    useEffect(() => {
        const frontendRoot = document.getElementById('frontend-root');
        if (frontendRoot) {
            const dataRoute = frontendRoot.dataset.route as ArrayElement<typeof ROUTES> | undefined;
            setRoute(dataRoute);

            const dataApiString = frontendRoot.dataset.api;
            if (dataApiString) {
                const parsedData: ACF_Property[] = JSON.parse(dataApiString);
                if (parsedData.length) {
                    const acf = parsedData[0].acf;
                    setApiResult(acf);
                }
            }
        }

        setHasLoaded(true);
    }, []);

    if (!hasLoaded) {
        return <LoadingMessage />;
    } else if (!route) {
        return <ErrorMessage message={'No route slug specified!'} />;
    } else if (!apiResult && route !== 'home') {
        return <ErrorMessage message={'No API results!'} />;
    }

    return route === 'home' ? (
        <Suspense fallback={<LoadingMessage />}>
            <Home />
        </Suspense>
    ) : (
        <Suspense fallback={<LoadingMessage />}>
            <Leistungen leistungsData={apiResult!} />
        </Suspense>
    );
};

export default App;
