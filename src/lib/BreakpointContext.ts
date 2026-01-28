import { createContext } from 'preact/compat';
import type { BreakpointName } from '../hooks/useBreakpoint';

export const BreakpointContext = createContext<BreakpointName | null>(null);
