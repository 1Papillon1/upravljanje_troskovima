import React, { useEffect, useState } from "react";
import { Person } from "@mui/icons-material";
import { CircleFlag } from "react-circle-flags";
import { observer } from "mobx-react";
import store from "../store/RootStore";

const Header = observer(() => {
  const [currentRoute, setCurrentRoute] = useState("Početna");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const uiStore = store.uiStore;
  const routerStore = store.routerStore;
  const authUser = store.userStore.authenticatedUser;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFlagChange = (flag) => {
    uiStore.setLanguage(flag);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (routerStore.routerState.routeName === "pocetna") {
      setCurrentRoute(uiStore.currentLanguage === "hr" ? "Početna" : "Home");
    } else if (routerStore.routerState.routeName === "troskovi") {
      setCurrentRoute(uiStore.currentLanguage === "hr" ? "Troškovi" : "Expenses");
    } else if (routerStore.routerState.routeName === "statistika") {
      setCurrentRoute(uiStore.currentLanguage === "hr" ? "Statistika" : "Statistics");
    } else if (routerStore.routerState.routeName === "postavke") {
      setCurrentRoute(uiStore.currentLanguage === "hr" ? "Postavke" : "Settings");
    }
  }, [routerStore.routerState.routeName, uiStore.currentLanguage]);

  const currentFlag = uiStore.currentLanguage === "cro" ? "hr" : "us";

  return (
    <div className="header">
      <div className="header--left">
        <a className="header__link" href="#">
          {currentRoute}
        </a>
      </div>

      <div className="header--right">
        <ul className="list list--horizontal">
          <li className="list--item list--item--secondary">
            <span className="header__span">
              {uiStore.currentLanguage === "hr" ? "Bok" : "Hi"}, {authUser.name}
            </span>

            <Person className="header__icon" />
          </li>
          <li className="list--item" onClick={toggleDropdown}>
            <CircleFlag
              countryCode={store.uiStore.currentLanguage === "hr" ? "hr" : "us"}
              className="header__icon header__icon--flag"
            />
            {isDropdownOpen && (
              <ul className="dropdown">
                <li className="dropdown__item" onClick={() => handleFlagChange("hr")}>
                  <CircleFlag countryCode="hr" className="dropdown__icon" />
                  <span className="dropdown__label">CRO</span>
                </li>
                <li className="dropdown__item" onClick={() => handleFlagChange("us")}>
                  <CircleFlag countryCode="us" className="dropdown__icon" />
                  <span className="dropdown__label">ENG</span>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Header;
