import { createContext, ReactNode, useMemo } from 'react';

// project imports
import config from 'config';

// types
import { ConfigContextValue, ConfigStates } from 'types/config';

export type Props = {
  children: ReactNode;
};

// ==============================|| CONFIG CONTEXT ||============================== //

export const ConfigContext = createContext<ConfigContextValue | undefined>(undefined);

// ==============================|| CONFIG PROVIDER ||============================== //

export function ConfigProvider({ children }: Props) {
  // No-op functions since config is read-only
  const setState = () => {};
  const setField = () => {};
  const resetState = () => {};

  const memoizedValue = useMemo(() => ({ state: config, setState, setField, resetState }), []);

  return <ConfigContext.Provider value={memoizedValue}>{children}</ConfigContext.Provider>;
}
