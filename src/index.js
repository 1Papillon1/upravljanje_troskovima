import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Root from './routes/Root';
import HomePath from './routes/HomePath';
import ExpensesPath from './routes/ExpensesPath';
import CategoriesPath from './routes/CategoriesPath';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Layout from './components/Layout';
import "./styles/_app.scss";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Root /> }, 
      { path: "/kategorije", element: <CategoriesPath /> },
      { path: "/troskovi", element: <ExpensesPath /> },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


