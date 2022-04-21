# React layers

A library for creating layers for React, helpful with things like modals, menus etc.

## Installation

```sh
npm install @purphoros/react-layers
```

## Setup

### Add LayersProvider to root of the app

Import `LayersProvider` from `@purphoros/react-layers` and add it as a root item.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { LayersProvider } from '@purphoros/react-layers';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <LayersProvider>
      <App />
    </LayersProvider>
  </React.StrictMode>
);
```

## Layers

From here you can create new layers, close them or minimize/maximize them.

### useLayer

|function||
|--|--|
|createLayer|...|
|closeLayerByUuid|...|
|closeLayerByName|...|
|closeAllLayers|...|

### Create layer - createLayer

Import `useLayer` from `@purphoros/react-layers` and use `createLayer` to create a new layer.

```jsx
import { useLayer } from '@purphoros/react-layers';

const Component = () => {
  const { createLayer } = useLayer();

  const Modal = () => <div style={{ position: "relative", width: "400px", padding: "12px", backgroundColor: "#FFF" }}>Modal</div>

  const onClick = () => {
    createLayer({
      orientation: "modal",
      component: <Modal />
    });
  }

  return <button onClick={onClick}>Open</button>
}

export default Component;
```

### Close layer

When you create a layer `layerUuid` is attached to the props of the component that can be used for actions such as closing that layer.

```js
  const { createLayer, closeLayerByUuid } = useLayer();

  const Modal = ({ layerUuid }: Layer) => <div style={{ position: "relative", width: "400px", padding: "12px", backgroundColor: "#FFF" }}>
    <div>Modal</div>
    <button onClick={() => closeLayerByUuid(layerUuid)}>Close</button>
  </div>
```