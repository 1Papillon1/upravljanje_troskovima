import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Root from './routes/Root';
import AuthPath from './routes/AuthPath';
import HomePath from './routes/HomePath';
import ExpensesPath from './routes/ExpensesPath';
import StatisticsPath from './routes/StatisticsPath';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Layout from './components/Layout';
import "./styles/_app.scss";
import SettingsPath from './routes/SettingsPath';

/*
Root provjerava da li je korisnik ulogiran ili nije
Ako je redirecta na /*
Ako nije redirecta na /login
*/


const router = createBrowserRouter([
  { 
    path: "/login", 
    element: <AuthPath /> 
  },
  { 
    path: "/", 
    element: <Root /> // Za redirect 
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/pocetna", element: <HomePath /> }, 
      { path: "/troskovi", element: <ExpensesPath /> },
      { path: "/statistika", element: <StatisticsPath /> },
      { path: "/postavke", element: <SettingsPath /> },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


