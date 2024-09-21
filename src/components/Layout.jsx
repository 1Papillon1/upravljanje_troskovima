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

const Layout = observer(() => {

    
    

    return(
        <div className="layout">
            <Header />
            <Navigation />
            <Outlet /> 
            <Footer />
        </div>
    )
})

export default Layout;