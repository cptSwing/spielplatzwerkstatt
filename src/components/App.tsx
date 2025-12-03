import { lazy, Suspense } from 'preact/compat';
import { useEffect, useState } from 'preact/hooks';
import type { ROUTES } from '../types/consts';
import type { WP_REST_API_Posts } from 'wp-types';
import type { ArrayElement } from '../types/types';

const Home = lazy(() => import('./Home'));
const Leistungen = lazy(() => import('./Leistungen'));

const App = () => {
    const [whichRoute, setWhichRoute] = useState<ArrayElement<typeof ROUTES> | null>(null);
    const [apiResult, setApiResult] = useState<WP_REST_API_Posts | null>(null);

    useEffect(() => {
        const frontendRoot = document.getElementById('frontend-root')!;
        if (frontendRoot) {
            setWhichRoute((frontendRoot.dataset.route as ArrayElement<typeof ROUTES>) ?? null);
            setApiResult(frontendRoot.dataset.api ? JSON.parse(frontendRoot.dataset.api) : null);
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
