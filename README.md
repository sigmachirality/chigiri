# Chigiri 🎗️
Chigiri is a [React](https://reactjs.com) [Context](https://reactjs.org/docs/context.html) library for calling React Components as data fetchers from `async` code. It accomplishes this by wrapping components in [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## But Why?
You can model a modal/general component as a Promise which resolves with the form contents of that component. This is nice when implementing UI/UX flows like [Two Factor Authentication](https://www.twilio.com/docs/glossary/what-is-two-factor-authentication-2fa), where blocking until the data is returned, as opposed to hooking into or writing an `onSubmit`-like function, allows you to maintain variables in execution context. Following this approach, one can trigger components as data fetchers from `async` code!

Compared to existing packages, Chigiri plays nicely with frameworks like [NextJS](https://nextjs.org/) which rely heavily on [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering). This is because existing packages register components at runtime, whereas Chigiri requires you to register all possible modal components at build time using a `ComponentTypes`-like object.

## Limitations
-  `triggerPromise` lacks inferred typing. You can type `triggerPromise` by passing a [Type Variable](https://www.typescriptlang.org/docs/handbook/2/generics.html)
-  `ModalProvider` can only open 1 modal at a time. Not sure if allowing more than 1 modal open at a time would be an anti-pattern.

## Documentation
I wrote a simple example app using [Chakra UI](https://chakra-ui.com) which you can clone, build and run at `/example` in this repo or view [here](https://danxtao.com/chigiri). The app provides a few interactive examples of how to use Chigiri, as well as links to their implementation in the `/example` app.

## Quick Start

### Base provider example
Use this provider if you want fine control of the modal component (where it's rendered in the DOM, props, etc). 

```typescript
import { PromiseProvider, usePromiseWrapper } from 'chigiri';
import ExampleModal from './ExampleModal';

function App() {
  return (
    <PromiseProvider>
      <Child>
    </PromiseProvider>
  )
}

function Child() {
  const { isOpen, resolve, reject, triggerPromise } = usePromiseWrapper();
  const [state, setState] = useState<StateType>();
  const onClick = async () => {
    const stateFromModal = await triggerModal<StateType>();
    setState(stateFromModal);
  }
  return (
    <ExampleModal
      isOpen={isOpen}
      onSubmit={resolve}
      onClose={reject}
    />
    <button onClick={onClick}>Set State</button>
    <h1>State: {state}</h1>
  )
}
```

### Modal provider example
```typescript
import registerModals from 'chigiri';
import ExampleModal from './ExampleModal';
const modals = {
  ExampleModal: ExampleModal
};
const { useModal, ModalProvider } = registerModals(modals);

function App() {
  return (
    <ModalProvider>
      <Child>
    </ModalProvider>
  )
}

function Child() {
  const { triggerModal } = useModal();
  const [state, setState] = useState<StateType>();
  const onClick = async () => {
    const stateFromModal = await triggerModal<StateType>('ExampleModal', modalProps);
    setState(stateFromModal);
  }
  return (
    <button onClick={onClick}>Set State</button>
    <h1>State: {state}</h1>
  )
}
```

## Maintainers
This library is maintained with ❤️ by me, [sigmachirality](https://github.com/sigmachirality).
