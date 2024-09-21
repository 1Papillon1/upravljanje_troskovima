import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import store from "../store/Store";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";


const Navigation = observer(() => {

    const navigate = useNavigate();

    const logoutUser = () => {
        store.userStore.logoutUser();
        navigate('/login');
    }
    
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
                        <a className="link link--navigation" href="/postavke">
                        <SettingsIcon className="link__icon" />
                        <span className="link__text">Postavke</span>
                        </a>
                        
                    </li>

                    <li className="list__item">
                        <a className="link link--navigation" href="/login">
                        <span className="link__text" onClick={logoutUser}>Odjava</span>
                        </a>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
});

export default Navigation;