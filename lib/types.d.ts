import { ReactNode, Component, ComponentProps, FC } from "react";
interface ProviderProps {
    children?: ReactNode;
}
interface PromiseContextState {
    isOpen: boolean;
    resolve: <R = unknown>(result?: R) => void | never;
    reject: (error?: Error | string) => void | never;
    triggerPromise: <R = unknown>() => Promise<R> | never;
}
export const PromiseProvider: ({ children }: ProviderProps) => JSX.Element;
export const usePromiseWrapper: () => PromiseContextState;
interface ModalProps {
    isOpen: boolean;
    resolve: <R = unknown>(result?: R) => void;
    reject: (error?: Error | string) => void;
}
type ComponentTypes = {
    [Component: string]: FC<ModalProps>;
};
type ComponentTypesUnion = keyof ComponentTypes;
type ComponentPropTypes<T extends ComponentTypes> = {
    [Component in keyof T]?: ComponentProps<typeof Component>;
};
type ComponentPropsUnion<T extends ComponentTypes> = keyof ComponentPropTypes<T>;
interface ModalContextState<T extends ComponentTypes> {
    setProps: (props?: ComponentPropTypes<T>) => void | never;
    triggerPromise: <R = unknown>(component: ComponentTypesUnion, props?: ComponentPropsUnion<T>) => Promise<R> | never;
}
interface ModalProviderExports<T extends ComponentTypes> {
    useModal: () => ModalContextState<T>;
    ModalProvider: FC<ProviderProps>;
}
export function registerModals<T extends ComponentTypes>(components: T): ModalProviderExports<T>;

//# sourceMappingURL=types.d.ts.map
