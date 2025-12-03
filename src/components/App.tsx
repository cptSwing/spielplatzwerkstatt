import { lazy, Suspense } from 'preact/compat';
import { useEffect, useState } from 'preact/hooks';
import type { ROUTES } from '../types/consts';
import type { ACF_Leistung_Type, ArrayElement, WP_REST_API_Post_With_ACF_Type } from '../types/types';

const Home = lazy(() => import('./Home'));
const Leistungen = lazy(() => import('./Leistungen'));

const App = () => {
    const [whichRoute, setWhichRoute] = useState<ArrayElement<typeof ROUTES> | null>(null);
    const [apiResult, setApiResult] = useState<ACF_Leistung_Type | null>(null);

    useEffect(() => {
        const frontendRoot = document.getElementById('frontend-root')!;
        if (frontendRoot) {
            const dataRoute = frontendRoot.dataset.route as ArrayElement<typeof ROUTES> | undefined;
            setWhichRoute(dataRoute ?? null);

            const dataApiString = frontendRoot.dataset.api;
            if (dataApiString) {
                const acf = (JSON.parse(dataApiString)[0] as WP_REST_API_Post_With_ACF_Type).acf;
                setApiResult(acf);
            }
        }
    }, []);

    if (!whichRoute || !apiResult) return <>Error</>;

    return (
        <>
            {whichRoute === 'home' ? (
                <Suspense fallback={<div>Loading</div>}>
                    <Home />
                </Suspense>
            ) : (
                <Suspense fallback={<div>Loading</div>}>
                    <Leistungen leistungsData={apiResult} />
                </Suspense>
            )}
        </>
    );
};

export default App;
