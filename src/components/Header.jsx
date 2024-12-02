import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Person } from "@mui/icons-material";
import { CircleFlag } from 'react-circle-flags'
import { observer } from "mobx-react";
import store from "../store/RootStore";



const Header = observer(() => 
{   
    const [currentRoute, setCurrentRoute] = useState('Početna');
    const [currentFlag, setCurrentFlag] = useState('cro');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const routerStore = store.routerStore;
    const authUser = store.userStore.authenticatedUser;
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleFlagChange = (flag) => {
        setCurrentFlag(flag);
        setIsDropdownOpen(false);
    }
    

    useEffect(() => {
     
        if (routerStore.routerState.routeName == 'pocetna') {
            setCurrentRoute('Početna');
        } else if (routerStore.routerState.routeName == 'troskovi') {
            setCurrentRoute('Troškovi');
    
        } else if (routerStore.routerState.routeName == 'statistika') {
            setCurrentRoute('Statistika');
        }  else if (routerStore.routerState.routeName == 'postavke') {
            setCurrentRoute('postavke');
        }
    },[])



  
   

    return(
        <div className="header">
            <div className="header--left">
                <a className="header__link" href="#">{routerStore.routerState.routeName}</a> 
            </div>

            <div className="header--right">
                <ul className="list list--horizontal">
                    <li className="list--item list--item--secondary">
                        <span className="header__span">Hi, {authUser.name}</span>
                    
                        <Person className="header__icon"/>
                    </li>
                    <li className="list--item" onClick={toggleDropdown}>
                        {currentFlag === 'cro' ? (
                            <CircleFlag countryCode="hr" className="header__icon header__icon--flag" />
                        ) : (
                            <CircleFlag countryCode="us" className="header__icon header__icon--flag" />
                        )}
                        {isDropdownOpen && (
                            <ul className="dropdown">
                                <li className="dropdown__item" onClick={() => handleFlagChange('cro')}>
                                    <CircleFlag countryCode="hr" className="dropdown__icon" />
                                    <span className="dropdown__label">CRO</span>
                                </li>
                                <li className="dropdown__item" onClick={() => handleFlagChange('us')}>
                                    <CircleFlag countryCode="us" className="dropdown__icon" />
                                    <span className="dropdown__label">ENG</span>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )
})

export default Header;