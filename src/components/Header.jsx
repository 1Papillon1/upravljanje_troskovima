import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header() 
{   
    const [currentRoute, setCurrentRoute] = useState('Početna');

    const location = useLocation();
    const route = location.pathname;
    
    

    useEffect(() => {
        if (route == '/') {
            setCurrentRoute('Početna');
        } else if (route == '/troskovi') {
            setCurrentRoute('Troškovi');
    
        } else if (route == '/kategorije') {
            setCurrentRoute('Kategorije');
        }
    },[])



  
   

    return(
        <div className="header">
            <div className="header--left">
                {currentRoute} /
            </div>

            <div className="header--right">

            </div>
        </div>
    )
}