var $83Duu$reactjsxruntime = require("react/jsx-runtime");
var $83Duu$react = require("react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

$parcel$export(module.exports, "registerModals", () => $60c7dc857f67bcba$export$2e2bcd8739ae039);
var $005ba2ef60db0b63$exports = {};

$parcel$export($005ba2ef60db0b63$exports, "PromiseProvider", () => $005ba2ef60db0b63$export$63491cd71a5483a1);
$parcel$export($005ba2ef60db0b63$exports, "usePromiseWrapper", () => $005ba2ef60db0b63$export$44155cb279842aea);


const $ca61bbf154b96400$var$ERROR_WRAP_COMPONENT = "Make sure to wrap your component in PromiseProvider!";
const $ca61bbf154b96400$export$8bf7aba4a9e09055 = ()=>{
    throw new Error($ca61bbf154b96400$var$ERROR_WRAP_COMPONENT);
};


const $005ba2ef60db0b63$var$PromiseContext = /*#__PURE__*/ (0, $83Duu$react.createContext)({
    isOpen: false,
    triggerPromise: (0, $ca61bbf154b96400$export$8bf7aba4a9e09055),
    resolve: (0, $ca61bbf154b96400$export$8bf7aba4a9e09055),
    reject: (0, $ca61bbf154b96400$export$8bf7aba4a9e09055)
});
const $005ba2ef60db0b63$export$63491cd71a5483a1 = ({ children: children  })=>{
    const [isOpen, setIsOpen] = (0, $83Duu$react.useState)(false);
    const [resolve, setResolve] = (0, $83Duu$react.useState)(()=>(0, $ca61bbf154b96400$export$8bf7aba4a9e09055));
    const [reject, setReject] = (0, $83Duu$react.useState)(()=>(0, $ca61bbf154b96400$export$8bf7aba4a9e09055));
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
    return /*#__PURE__*/ (0, $83Duu$reactjsxruntime.jsx)($005ba2ef60db0b63$var$PromiseContext.Provider, {
        value: contextValue,
        children: children
    });
};
const $005ba2ef60db0b63$export$44155cb279842aea = ()=>{
    const ctx = (0, $83Duu$react.useContext)($005ba2ef60db0b63$var$PromiseContext);
    if (!ctx) (0, $ca61bbf154b96400$export$8bf7aba4a9e09055)();
    return ctx;
};





const $60c7dc857f67bcba$var$_createModalContext = ()=>/*#__PURE__*/ (0, $83Duu$react.createContext)({
        setProps: (0, $ca61bbf154b96400$export$8bf7aba4a9e09055),
        triggerPromise: (0, $ca61bbf154b96400$export$8bf7aba4a9e09055)
    });
const $60c7dc857f67bcba$var$_createModalProvider = (ModalContext, components)=>({ children: children  })=>{
        const [isOpen, setIsOpen] = (0, $83Duu$react.useState)(false);
        const [resolve, setResolve] = (0, $83Duu$react.useState)(()=>(0, $ca61bbf154b96400$export$8bf7aba4a9e09055));
        const [reject, setReject] = (0, $83Duu$react.useState)(()=>(0, $ca61bbf154b96400$export$8bf7aba4a9e09055));
        const [component, setComponent] = (0, $83Duu$react.useState)();
        const [props, setProps] = (0, $83Duu$react.useState)();
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
        let RenderedModal = /*#__PURE__*/ (0, $83Duu$reactjsxruntime.jsx)((0, $83Duu$react.Fragment), {});
        if (component && components.hasOwnProperty(component)) {
            const ModalComponent = components[component];
            RenderedModal = /*#__PURE__*/ (0, $83Duu$reactjsxruntime.jsx)(ModalComponent, {
                isOpen: isOpen,
                resolve: resolve,
                reject: reject,
                ...props
            });
        }
        return /*#__PURE__*/ (0, $83Duu$reactjsxruntime.jsxs)(ModalContext.Provider, {
            value: contextValue,
            children: [
                RenderedModal,
                children
            ]
        });
    };
function $60c7dc857f67bcba$var$registerModals(components) {
    const Context = $60c7dc857f67bcba$var$_createModalContext();
    const useModal = ()=>{
        const ctx = (0, $83Duu$react.useContext)(Context);
        if (!ctx) throw (0, $ca61bbf154b96400$export$8bf7aba4a9e09055)();
        return ctx;
    };
    const ModalProvider = $60c7dc857f67bcba$var$_createModalProvider(Context, components);
    return {
        useModal: useModal,
        ModalProvider: ModalProvider
    };
}
var $60c7dc857f67bcba$export$2e2bcd8739ae039 = $60c7dc857f67bcba$var$registerModals;


$parcel$exportWildcard(module.exports, $005ba2ef60db0b63$exports);


//# sourceMappingURL=main.js.map
