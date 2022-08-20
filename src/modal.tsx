import { createContext, useContext, useState, Fragment } from 'react';
import type { Component, ComponentProps, Context, FC } from 'react';
import { throwError, ProviderProps } from './common';

interface ModalProps {
  isOpen: boolean;
  resolve: <R = unknown>(result?: R) => void;
  reject: (error?: Error | string) => void;
}
export type ComponentTypes = {
  [Component: string]: FC<ModalProps>;
};
export type ComponentTypesUnion = keyof ComponentTypes;
export type ComponentPropTypes<T extends ComponentTypes> = {
  [Component in keyof T]?: ComponentProps<typeof Component>;
};
export type ComponentPropsUnion<T extends ComponentTypes> = keyof ComponentPropTypes<T>;

interface ModalContextState<T extends ComponentTypes> {
  setProps: (props?: ComponentPropTypes<T>) => void | never;
  triggerPromise: <R = unknown>(component: ComponentTypesUnion, props?: ComponentPropsUnion<T>) => Promise<R> | never;
}
type ModalContext<T extends ComponentTypes> = Context<ModalContextState<T>>;

const _createModalContext = <T extends ComponentTypes>(): ModalContext<T> =>
  createContext<ModalContextState<T>>({
    setProps: throwError,
    triggerPromise: throwError,
  });

const _createModalProvider =
  <T extends ComponentTypes>(ModalContext: ModalContext<T>, components: T) =>
  ({ children }: ProviderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [resolve, setResolve] = useState<(result?: unknown) => void>(() => throwError);
    const [reject, setReject] = useState<(error?: unknown) => void>(() => throwError);
    const [component, setComponent] = useState<ComponentTypesUnion>();
    const [props, setProps] = useState<ComponentPropTypes<T>>();
    const triggerPromise = <R=unknown>(component: ComponentTypesUnion, props?: ComponentPropTypes<T>) => {
      setIsOpen(true);
      setProps(props);
      setComponent(component);
      return new Promise<R>((resolve, reject) => {
        const wrappedResolve = (result: R) => {
          setIsOpen(false);
          setProps(undefined);
          setComponent(undefined);
          return resolve(result);
        };
        const wrappedReject = (error?: Error | string) => {
          setIsOpen(false);
          setProps(undefined);
          setComponent(undefined);
          return reject(error);
        };
        setResolve(() => wrappedResolve);
        setReject(() => wrappedReject);
      });
    };

    const contextValue: ModalContextState<T> = {
      triggerPromise,
      setProps,
    };

    let RenderedModal = <Fragment />;
    if (component && components.hasOwnProperty(component)) {
      const ModalComponent = components[component];
      RenderedModal = <ModalComponent isOpen={isOpen} resolve={resolve} reject={reject} {...props} />;
    }

    return (
      <ModalContext.Provider value={contextValue}>
        {RenderedModal}
        {children}
      </ModalContext.Provider>
    );
  };

interface ModalProviderExports<T extends ComponentTypes> {
  useModal: () => ModalContextState<T>;
  ModalProvider: FC<ProviderProps>;
}

function registerModals<T extends ComponentTypes>(components: T): ModalProviderExports<T> {
  const Context = _createModalContext<T>();
  const useModal = () => {
    const ctx = useContext(Context);
    if (!ctx) throw throwError();
    return ctx;
  };
  const ModalProvider = _createModalProvider(Context, components);
  return {
    useModal,
    ModalProvider,
  };
}

export default registerModals;
