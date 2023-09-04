# Redux-and-Zustand

## 1. A base do Redux

### Fundamentos do Redux

React state types:
- Local state (useState, Context API, Jotai, Recoil)
- Global state ([Redux](https://redux.js.org/))
- Server state (React Query, SWR, Redux Tollkit)

Other Alternatives:
- Context API + useReducer
- Zustand (Redux)
- Jotai (Context API)

Flux Architecture
- Actions
- Store
  - Dispatcher
  - Reducer
  - State
- View
  - React Components

### Criando store do Redux

Create the project (using Typescript):
```sh
npm create vite@latest react-redux-zustand --use npm
```
Go to the project derectory:
```sh
cd react-redux-zustand
```
Install the dependencies:
```sh
npm install
```
Start the project:
```sh
npm run dev
```

Install the [Redux Toolkit](https://redux-toolkit.js.org/):
```sh
npm i @reduxjs/toolkit
npm i react-redux
```

Create the directory to store the global states:
```sh
cd src
mkdir store
```

### Disparando actions no Redux


### Utilizando Redux DevTools

- [Chrome Extention](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related)


