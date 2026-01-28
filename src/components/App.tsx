import { lazy, Suspense } from 'preact/compat';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';
import useParseApi from '../hooks/useParseApi';
import type { ACF_Contacts_Type, ACF_Home_Type, ACF_Leistung_Type } from '../types/types';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { BreakpointContext } from '../lib/BreakpointContext';

const Home = lazy(() => import('./Home'));
const Leistungen = lazy(() => import('./Leistungen'));
const Contact = lazy(() => import('./Contact'));

const App = () => {
    const { route, hasLoaded, apiResult } = useParseApi();
    const breakpoint = useBreakpoint();

    if (!hasLoaded) {
        return <LoadingMessage />;
    } else if (!route) {
        return <ErrorMessage message={'No route slug specified!'} />;
    } else if (!apiResult && route !== 'home') {
        return <ErrorMessage message={'No API results!'} />;
    }

    switch (route) {
        case 'home':
            return (
                <Suspense fallback={<LoadingMessage />}>
                    <BreakpointContext value={breakpoint}>
                        <Home homeData={apiResult as ACF_Home_Type} />
                    </BreakpointContext>
                </Suspense>
            );

        case 'kontakt':
            return (
                <Suspense fallback={<LoadingMessage />}>
                    <BreakpointContext value={breakpoint}>
                        <Contact contactData={apiResult as ACF_Contacts_Type} />
                    </BreakpointContext>
                </Suspense>
            );

        default:
            return (
                <Suspense fallback={<LoadingMessage />}>
                    <BreakpointContext value={breakpoint}>
                        <Leistungen leistungsData={apiResult as ACF_Leistung_Type} route={route} />
                    </BreakpointContext>
                </Suspense>
            );
    }
};

export default App;
