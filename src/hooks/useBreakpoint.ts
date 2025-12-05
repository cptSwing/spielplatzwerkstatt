import defaultTheme from 'tailwindcss/defaultTheme';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

console.log('defaultTheme', defaultTheme);
console.log('defaultTheme.screens', defaultTheme.screens);

/* https://github.com/cptSwing/cpts-react-utilities/blob/main/hooks/useBreakPoint.ts */

const { screens } = defaultTheme;

type Breakpoints = typeof screens;
export type BreakpointName = keyof Breakpoints;
type BreakpointQueryList = {
    breakpoint: BreakpointName;
    mediaQuery: string;
    mediaQueryList: MediaQueryList;
};

export const useBreakpoint = (callback?: (breakpoint: BreakpointName | null) => void): BreakpointName | null => {
    const mediaQueryLists_Ref = useRef<BreakpointQueryList[]>(
        Object.entries(screens)
            .sort((a, b) => {
                const aLength = parseLengthString(a[1]);
                const bLength = parseLengthString(b[1]);
                if (aLength.unit !== bLength.unit) throw new Error(`Incompatible CSS Length units: "${aLength.unit}" and "${bLength.unit}`);
                return aLength.value - bLength.value;
            })
            .map(([breakpoint, width]) => ({
                breakpoint: breakpoint as BreakpointName,
                mediaQuery: `(min-width: ${width})`,
                mediaQueryList: window.matchMedia(`(min-width: ${width})`),
            })),
    );

    const [breakpoint, setBreakpoint] = useState<BreakpointName | null>(null);

    useEffect(() => {
        const lists = mediaQueryLists_Ref.current;
        lists.forEach(({ breakpoint, mediaQueryList }) => {
            if (mediaQueryList.matches) {
                setBreakpoint(breakpoint);
            }

            mediaQueryList.addEventListener('change', onChange);
        });

        return () => lists.forEach(({ mediaQueryList }) => mediaQueryList.removeEventListener('change', onChange));
    }, []);

    useLayoutEffect(() => {
        if (callback) {
            callback(breakpoint);
        }
    }, [breakpoint, callback]);

    return breakpoint;

    function onChange(this: MediaQueryList, e: MediaQueryListEvent) {
        const breakpointIndex = mediaQueryLists_Ref.current.findIndex(({ mediaQueryList }) => this === mediaQueryList);

        if (e.matches) {
            const currentBreakpoint = breakpointIndex >= 0 ? mediaQueryLists_Ref.current[breakpointIndex]!.breakpoint : null;
            setBreakpoint(currentBreakpoint);
        } else {
            const smallerBreakpoint = mediaQueryLists_Ref.current[breakpointIndex - 1] ? mediaQueryLists_Ref.current[breakpointIndex - 1]!.breakpoint : null;
            setBreakpoint(smallerBreakpoint);
        }
    }
};

export const useSpecificBreakpoint = (query: BreakpointName): boolean => {
    const mediaQuery = `(min-width: ${screens[query]})`;
    const matchQueryList = window.matchMedia(mediaQuery);

    const [isMatch, setIsMatch] = useState<boolean>(false);

    useEffect(() => {
        setIsMatch(matchQueryList.matches);
        matchQueryList.addEventListener('change', onChange);

        return () => matchQueryList.removeEventListener('change', onChange);
    }, [matchQueryList, query]);

    return isMatch;

    function onChange(e: MediaQueryListEvent) {
        setIsMatch(e.matches);
    }
};

function parseLengthString(length: string): { value: number; unit: string } {
    const match = length.match(/^(\d+(?:\.\d+)?)([a-z%]+)$/i);
    if (!match) {
        throw new Error(`Invalid CSS length: "${length}"`);
    } else {
        return { value: parseFloat(match[0]), unit: match[2] ?? '' };
    }
}
