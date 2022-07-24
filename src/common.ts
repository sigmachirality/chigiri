import type { ReactNode } from 'react';

const ERROR_WRAP_COMPONENT = 'Make sure to wrap your component in PromiseProvider!';
export const throwError = (): never => {
  throw new Error(ERROR_WRAP_COMPONENT);
};

export interface ProviderProps {
  children?: ReactNode;
}
