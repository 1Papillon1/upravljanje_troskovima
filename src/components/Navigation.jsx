import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import { observer } from "mobx-react";
import store from "../store/RootStore";


const Navigation = observer(() =>   {

    const routerStore = store.routerStore;
  
    


   

    const changeRoute = (route) => {
        if (route == "login") {
            store.userStore.logoutUser();

        }
        store.routerStore.goTo(route);
     
    }
    
    
    return(
        <div className="sidebar">
            <div className="navigation">
            <ul className="list">
  <li className="list__item" onClick={() => changeRoute("pocetna")}>
    <a className="link link--navigation">
      <HomeIcon className="link__icon" />
      <span className="link__text">
        Početna
      </span>
    </a>
  </li>
  <li className="list__item" onClick={() => changeRoute("troskovi")}>
    <a className="link link--navigation">
      <AttachMoneyIcon className="link__icon" />
      <span className="link__text">
        Troškovi
      </span>
    </a>
  </li>
  <li className="list__item" onClick={() => changeRoute("login")}>
        <a className="link link--navigation">
            <span className="link__text" >Odjava</span>
        </a>                 
    </li>
</ul>

                {/* <ul className="list">
                    <li className="list__item">
                        <a className="link link--navigation">
                        <HomeIcon className="link__icon" />
                        <span className="link__text" onClick={changeRoute("pocetna")}>Početna</span>
                        </a>
                        
                    </li>
                    <li className="list__item">
                        <a className="link link--navigation">
                        <AttachMoneyIcon className="link__icon" />
                        <span className="link__text" onClick={changeRoute("troskovi")}>Troškovi</span>
                        </a>
                    </li>
                
                 
                    <li className="list__item">
                        <a className="link link--navigation">
                        <CategoryIcon className="link__icon" />
                        <span className="link__text" onClick={changeRoute("statistika")}>Statistika</span>
                        </a>
                        
                    </li>
                    <li className="list__item">
                        <a className="link link--navigation">
                        <SettingsIcon className="link__icon" />
                        <span className="link__text" onClick={changeRoute("postavke")}>Postavke</span>
                        </a>
                        
                    </li>

                    <li className="list__item">
                        <a className="link link--navigation">
                        <span className="link__text" onClick={logoutUser}>Odjava</span>
                        </a>
                        
                    </li>
                </ul> */}
            </div>
        </div>
    )
}
)

export default Navigation;
