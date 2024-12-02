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
    login: <AuthPath />,
    pocetna: <Layout><HomePath /></Layout>,
    troskovi: <Layout><ExpensesPath /></Layout>,
    statistika: <Layout><StatisticsPath /></Layout>,
    postavke: <Layout><SettingsPath /></Layout>,
};

const App = observer(() => {
    
  // dohvaćanje trenutne rute

 const currentRoute = store.routerStore.routerState;



  // provjera trenutne rute za integriranje Layout komponente
  const layoutContains = ['pocetna', 'troskovi', 'statistika', 'postavke'].includes(currentRoute.routeName);


    return (
    <>
      <RouterView routerStore={store.routerStore} viewMap={views} />
    </>
    )
  });

export default App;