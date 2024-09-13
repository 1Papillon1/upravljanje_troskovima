import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
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
            <main className="content">
                <Outlet /> {/* Ovdje će se prikazivati sadržaj trenutne rute */}
            </main>
        </div>
    )
}