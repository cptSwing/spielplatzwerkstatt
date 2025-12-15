import { useEffect } from 'react';

const useUpdateTheme = () => {
    /* step through theme settings */
    const theme = useZustand((store) => store.values.theme);
    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);
};

export default useUpdateTheme;
