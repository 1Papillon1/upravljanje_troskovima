import React, { useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import {
    createBrowserRouter,
    RouterProvider,
    useLocation,
    Outlet,
  } from "react-router-dom";
import { observer } from "mobx-react";
import store from '../store/RootStore';

// children poziva path view
const Layout = observer(({children}) => {

    
    
    

    return(
        <div className="layout">
            <Header />
            <Navigation />
            {children}
            <Footer /> 
        </div>
    )
})


export default Layout;
