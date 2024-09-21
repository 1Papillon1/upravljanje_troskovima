import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import {
    createBrowserRouter,
    RouterProvider,
    useLocation,
    Outlet,
  } from "react-router-dom";

export default function Layout({  }) 
{
    
    

    return(
        <div className="layout">
            <Header />
            <Navigation />
            <Outlet /> 
            <Footer />
        </div>
    )
}