import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterContext } from 'mobx-state-router';
import './styles/_app.scss';
import store from './store/RootStore';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterContext.Provider value={store.routerStore}>
            <App />
        </RouterContext.Provider>
    </React.StrictMode>
);