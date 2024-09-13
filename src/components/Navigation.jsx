import React from "react";



export default function Navigation() 
{

    return(
        <div className="navigation">
            <ul className="list">
                <li className="list__item">
                    <a href="/home">Početna</a>
                </li>
                <li className="list__item">
                    <a href="/expenses">Troškovi</a>
                </li>
                <li className="list__item">
                    <a href="/categories">Kategorije</a>
                </li>
            </ul>
        </div>
    )
}