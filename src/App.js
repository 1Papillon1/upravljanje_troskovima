import React, { useEffect } from 'react';
import { RouterView } from 'mobx-state-router';
import { observer } from 'mobx-react';
import AuthPath from './routes/AuthPath';
import HomePath from './routes/HomePath';
import ExpensesPath from './routes/ExpensesPath';
import StatisticsPath from './routes/StatisticsPath';
import SettingsPath from './routes/SettingsPath';
import store from './store/RootStore';
import Layout from './components/Layout';

const views = {
    home: <AuthPath />,
    login: <AuthPath />,
    pocetna: <Layout><HomePath /></Layout>,
    troskovi: <Layout><ExpensesPath /></Layout>,
    statistika: <Layout><StatisticsPath /></Layout>,
    postavke: <Layout><SettingsPath /></Layout>,
};

const App = observer(() => {
    const { routerState } = store.routerStore;
    const { authenticatedUser } = store.userStore;

    

    return (
        <RouterView routerStore={store.routerStore} viewMap={views} />
    );
});

export default App;
