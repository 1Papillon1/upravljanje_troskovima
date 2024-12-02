import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import { RouterContext } from 'mobx-state-router'; // You need this context
import './styles/_app.scss';
import store from './store/RootStore';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterContext.Provider value={store.routerStore}> 
        <App />
      </RouterContext.Provider>
    </Provider>
  </React.StrictMode>
);