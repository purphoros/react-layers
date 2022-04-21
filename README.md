# React layers

A library for creating layers for React, helpful with things like modals, menus etc.

## Installation

```
npm install @purphoros/react-layers
```

## Setup

### Add LayersProvider to root of the app


```
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

### 