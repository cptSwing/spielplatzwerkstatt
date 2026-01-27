import { useEffect, useRef } from 'preact/compat';

export const usePrevious = <T>(val: T): T | undefined => {
    const ref = useRef<T | undefined>(undefined);
    useEffect(() => {
        ref.current = val;
    }, [val]);

    return ref.current;
};
