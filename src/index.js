import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import HomePath from './routes/HomePath';
import ExpensesPath from './routes/ExpensesPath';
import CategoriesPath from './routes/CategoriesPath';
import Navigation from './components/Navigation';
import "./styles/_app.scss";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/categories",
    element: <CategoriesPath />,
  },
  {
    path: "/expenses",
    element: <ExpensesPath />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router={router} />
  </React.StrictMode>
);


