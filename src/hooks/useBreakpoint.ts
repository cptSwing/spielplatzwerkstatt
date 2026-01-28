import { useEffect, useState } from 'preact/hooks';
import defaultTheme from 'tailwindcss/defaultTheme';

/* https://github.com/cptSwing/cpts-react-utilities/blob/main/hooks/useBreakPoint.ts */

const { screens } = defaultTheme;

type Breakpoints = typeof screens;
export type BreakpointName = keyof Breakpoints | 'base';
type BreakpointQueryList = {
    value: number;
    unit: string;
    breakpointName: BreakpointName;
    mediaQuery: string;
    mediaQueryList: MediaQueryList;
};

export const tailwindMediaQueryLists: BreakpointQueryList[] = Object.entries(screens)
    .map(([breakpoint, width]) => {
        const { value, unit } = parseLengthString(width);

        return {
            value,
            unit,
            breakpointName: breakpoint as BreakpointName,
            mediaQuery: `(min-width: ${width})`,
            mediaQueryList: window.matchMedia(`(min-width: ${width})`),
        };
    })
    .sort((a, b) => {
        if (a.unit !== b.unit) throw new Error(`Incompatible CSS Length units: "${a.unit}" and "${b.unit}`);
        return a.value - b.value;
    });

export const useBreakpoint = (callback?: (breakpoint: BreakpointName) => void): BreakpointName => {
    const [breakpoint, setBreakpoint] = useState<BreakpointName>('base');

    useEffect(() => {
        const lists = tailwindMediaQueryLists;
        lists.forEach(({ breakpointName, mediaQueryList }) => {
            if (mediaQueryList.matches) {
                setBreakpoint(breakpointName);
            }

            mediaQueryList.addEventListener('change', onChange);
        });

        return () => lists.forEach(({ mediaQueryList }) => mediaQueryList.removeEventListener('change', onChange));
    }, []);

    useEffect(() => {
        if (callback) {
            callback(breakpoint);
        }
    }, [breakpoint, callback]);

    return breakpoint;

    /* Local functions: */

    function onChange(this: MediaQueryList, ev: MediaQueryListEvent) {
        const breakpointIndex = tailwindMediaQueryLists.findIndex(({ mediaQueryList }) => this === mediaQueryList);

        if (ev.matches) {
            const currentBreakpoint = breakpointIndex >= 0 ? tailwindMediaQueryLists[breakpointIndex]!.breakpointName : 'base';
            setBreakpoint(currentBreakpoint);
        } else {
            const smallerBreakpoint = tailwindMediaQueryLists[breakpointIndex - 1] ? tailwindMediaQueryLists[breakpointIndex - 1]!.breakpointName : 'base';
            setBreakpoint(smallerBreakpoint);
        }
    }
};

export const useSpecificBreakpoint = (query: keyof Breakpoints): boolean => {
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
