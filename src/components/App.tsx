import { lazy, Suspense } from 'preact/compat';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';
import useParseApi from '../hooks/useParseApi';
import type { ACF_Contacts_Type, ACF_Home_Type, ACF_Leistung_Type } from '../types/types';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { BreakpointContext } from '../lib/BreakpointContext';
import HamburgerMenu from './HamburgerMenu';

const Home = lazy(() => import('./Home'));
const Leistungen = lazy(() => import('./Leistungen'));
const Contact = lazy(() => import('./Contact'));

const App = () => {
    const breakpoint = useBreakpoint();

    return (
        <BreakpointContext value={breakpoint}>
            <HamburgerMenu />

            <Suspense fallback={<LoadingMessage />}>
                <Routes />
            </Suspense>
        </BreakpointContext>
    );
};

export default App;

const Routes = () => {
    const { route, hasLoaded, apiResult } = useParseApi();

    if (!hasLoaded) {
        return <LoadingMessage />;
    } else if (!route) {
        return <ErrorMessage message={'No route slug specified!'} />;
    } else if (!apiResult && route !== 'home') {
        return <ErrorMessage message={'No API results!'} />;
    }

    switch (route) {
        case 'home':
            return <Home homeData={apiResult as ACF_Home_Type} />;

        case 'kontakt':
            return <Contact contactData={apiResult as ACF_Contacts_Type} />;

        default:
            return <Leistungen leistungsData={apiResult as ACF_Leistung_Type} route={route} />;
    }
};
