import {jsx as $9Ue0q$jsx, jsxs as $9Ue0q$jsxs} from "react/jsx-runtime";
import {createContext as $9Ue0q$createContext, useState as $9Ue0q$useState, useContext as $9Ue0q$useContext, Fragment as $9Ue0q$Fragment} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c51fd972c1824cd5$exports = {};

$parcel$export($c51fd972c1824cd5$exports, "PromiseProvider", () => $c51fd972c1824cd5$export$63491cd71a5483a1);
$parcel$export($c51fd972c1824cd5$exports, "usePromiseWrapper", () => $c51fd972c1824cd5$export$44155cb279842aea);


const $ee723407fc634988$var$ERROR_WRAP_COMPONENT = "Make sure to wrap your component in PromiseProvider!";
const $ee723407fc634988$export$8bf7aba4a9e09055 = ()=>{
    throw new Error($ee723407fc634988$var$ERROR_WRAP_COMPONENT);
};


const $c51fd972c1824cd5$var$PromiseContext = /*#__PURE__*/ (0, $9Ue0q$createContext)({
    isOpen: false,
    triggerPromise: (0, $ee723407fc634988$export$8bf7aba4a9e09055),
    resolve: (0, $ee723407fc634988$export$8bf7aba4a9e09055),
    reject: (0, $ee723407fc634988$export$8bf7aba4a9e09055)
});
const $c51fd972c1824cd5$export$63491cd71a5483a1 = ({ children: children  })=>{
    const [isOpen, setIsOpen] = (0, $9Ue0q$useState)(false);
    const [resolve, setResolve] = (0, $9Ue0q$useState)(()=>(0, $ee723407fc634988$export$8bf7aba4a9e09055));
    const [reject, setReject] = (0, $9Ue0q$useState)(()=>(0, $ee723407fc634988$export$8bf7aba4a9e09055));
    const triggerPromise = ()=>{
        setIsOpen(true);
        return new Promise((resolve, reject)=>{
            const wrappedResolve = (result)=>{
                setIsOpen(false);
                return resolve(result);
            };
            const wrappedReject = (error)=>{
                setIsOpen(false);
                return reject(error);
            };
            setResolve(()=>wrappedResolve);
            setReject(()=>wrappedReject);
        });
    };
    const contextValue = {
        isOpen: isOpen,
        resolve: resolve,
        reject: reject,
        triggerPromise: triggerPromise
    };
    return /*#__PURE__*/ (0, $9Ue0q$jsx)($c51fd972c1824cd5$var$PromiseContext.Provider, {
        value: contextValue,
        children: children
    });
};
const $c51fd972c1824cd5$export$44155cb279842aea = ()=>{
    const ctx = (0, $9Ue0q$useContext)($c51fd972c1824cd5$var$PromiseContext);
    if (!ctx) (0, $ee723407fc634988$export$8bf7aba4a9e09055)();
    return ctx;
};





const $2e33bd2b6eaa5b76$var$_createModalContext = ()=>/*#__PURE__*/ (0, $9Ue0q$createContext)({
        setProps: (0, $ee723407fc634988$export$8bf7aba4a9e09055),
        triggerPromise: (0, $ee723407fc634988$export$8bf7aba4a9e09055)
    });
const $2e33bd2b6eaa5b76$var$_createModalProvider = (ModalContext, components)=>({ children: children  })=>{
        const [isOpen, setIsOpen] = (0, $9Ue0q$useState)(false);
        const [resolve, setResolve] = (0, $9Ue0q$useState)(()=>(0, $ee723407fc634988$export$8bf7aba4a9e09055));
        const [reject, setReject] = (0, $9Ue0q$useState)(()=>(0, $ee723407fc634988$export$8bf7aba4a9e09055));
        const [component, setComponent] = (0, $9Ue0q$useState)();
        const [props, setProps] = (0, $9Ue0q$useState)();
        const triggerPromise = (component, props)=>{
            setIsOpen(true);
            setProps(props);
            setComponent(component);
            return new Promise((resolve, reject)=>{
                const wrappedResolve = (result)=>{
                    setIsOpen(false);
                    setProps(undefined);
                    setComponent(undefined);
                    return resolve(result);
                };
                const wrappedReject = (error)=>{
                    setIsOpen(false);
                    setProps(undefined);
                    setComponent(undefined);
                    return reject(error);
                };
                setResolve(()=>wrappedResolve);
                setReject(()=>wrappedReject);
            });
        };
        const contextValue = {
            triggerPromise: triggerPromise,
            setProps: setProps
        };
        let RenderedModal = /*#__PURE__*/ (0, $9Ue0q$jsx)((0, $9Ue0q$Fragment), {});
        if (component && components.hasOwnProperty(component)) {
            const ModalComponent = components[component];
            RenderedModal = /*#__PURE__*/ (0, $9Ue0q$jsx)(ModalComponent, {
                isOpen: isOpen,
                resolve: resolve,
                reject: reject,
                ...props
            });
        }
        return /*#__PURE__*/ (0, $9Ue0q$jsxs)(ModalContext.Provider, {
            value: contextValue,
            children: [
                RenderedModal,
                children
            ]
        });
    };
function $2e33bd2b6eaa5b76$var$registerModals(components) {
    const Context = $2e33bd2b6eaa5b76$var$_createModalContext();
    const useModal = ()=>{
        const ctx = (0, $9Ue0q$useContext)(Context);
        if (!ctx) throw (0, $ee723407fc634988$export$8bf7aba4a9e09055)();
        return ctx;
    };
    const ModalProvider = $2e33bd2b6eaa5b76$var$_createModalProvider(Context, components);
    return {
        useModal: useModal,
        ModalProvider: ModalProvider
    };
}
var $2e33bd2b6eaa5b76$export$2e2bcd8739ae039 = $2e33bd2b6eaa5b76$var$registerModals;




export {$2e33bd2b6eaa5b76$export$2e2bcd8739ae039 as registerModals, $c51fd972c1824cd5$export$63491cd71a5483a1 as PromiseProvider, $c51fd972c1824cd5$export$44155cb279842aea as usePromiseWrapper};
//# sourceMappingURL=module.js.map
