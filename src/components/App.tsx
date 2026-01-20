import { lazy, Suspense } from 'preact/compat';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';
import useParseApi from '../hooks/useParseApi';
import type { ACF_Home_Type, ACF_Leistung_Type } from '../types/types';

const Home = lazy(() => import('./Home'));
const Leistungen = lazy(() => import('./Leistungen'));

const App = () => {
    const { route, hasLoaded, apiResult } = useParseApi();

    if (!hasLoaded) {
        return <LoadingMessage />;
    } else if (!route) {
        return <ErrorMessage message={'No route slug specified!'} />;
    } else if (!apiResult && route !== 'home') {
        return <ErrorMessage message={'No API results!'} />;
    }

    return route === 'home' ? (
        <Suspense fallback={<LoadingMessage />}>
            <Home homeData={apiResult as ACF_Home_Type} />
        </Suspense>
    ) : (
        <Suspense fallback={<LoadingMessage />}>
            <Leistungen leistungsData={apiResult as ACF_Leistung_Type} />
        </Suspense>
    );
};

export default App;
