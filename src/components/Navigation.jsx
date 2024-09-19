import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';



export default function Navigation() 
{

    return(
        <div className="sidebar">
            <div className="navigation">
                <ul className="list">
                    <li className="list__item">
                        <a className="link link--navigation" href="/pocetna">
                        <HomeIcon className="link__icon" />
                        <span className="link__text">Početna</span>
                        </a>
                        
                    </li>
                    <li className="list__item">
                        <a className="link link--navigation" href="/troskovi">
                        <AttachMoneyIcon className="link__icon" />
                        <span className="link__text">Troškovi</span>
                        </a>
                        
                    </li>
                    <li className="list__item">
                        <a className="link link--navigation" href="/statistika">
                        <CategoryIcon className="link__icon" />
                        <span className="link__text">Statistika</span>
                        </a>
                        
                    </li>

                    <li className="list__item">
                        <a className="link link--navigation" href="/login">
                        <span className="link__text">Odjava</span>
                        </a>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}