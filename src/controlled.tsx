import React, { createContext, useContext, useState } from 'react';
import { throwError, ProviderProps } from './common';

interface PromiseContextState {
  isOpen: boolean;
  resolve: <R = unknown>(result?: R) => void | never;
  reject: (error?: Error | string) => void | never;
  triggerPromise: <R = unknown>() => Promise<R> | never;
}
const PromiseContext = createContext<PromiseContextState>({
  isOpen: false,
  triggerPromise: throwError,
  resolve: throwError,
  reject: throwError,
});

export const PromiseProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [resolve, setResolve] = useState<(result?: unknown) => void>(throwError);
  const [reject, setReject] = useState<(error?: unknown) => void>(throwError);
  const triggerPromise = <R=unknown>() => {
    setIsOpen(true);
    return new Promise<R>((resolve, reject) => {
      const wrappedResolve = (result: R) => {
        setIsOpen(false);
        return resolve(result);
      };
      const wrappedReject = (error?: Error | string) => {
        setIsOpen(false);
        return reject(error);
      };
      setResolve(() => wrappedResolve);
      setReject(() => wrappedReject);
    });
  };
  const contextValue: PromiseContextState = {
    isOpen,
    resolve,
    reject,
    triggerPromise,
  };
  return <PromiseContext.Provider value={contextValue}>{children}</PromiseContext.Provider>;
};

export const usePromiseWrapper = (): PromiseContextState => {
  const ctx = useContext(PromiseContext);
  if (!ctx) throwError();
  return ctx;
};
