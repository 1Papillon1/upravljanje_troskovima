import React from "react";



export default function Navigation() 
{

    return(
        <div className="sidebar">
            <div className="navigation">
                <ul className="list">
                    <li className="list__item">
                        <a className="link link--navigation" href="/home">Početna</a>
                    </li>
                    <li className="list__item">
                        <a className="link link--navigation" href="/expenses">Troškovi</a>
                    </li>
                    <li className="list__item">
                        <a className="link link--navigation" href="/categories">Kategorije</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}