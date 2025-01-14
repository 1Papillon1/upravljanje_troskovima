import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { observer } from "mobx-react";
import store from "../store/RootStore";

const Layout = observer(({ children }) => {
  const { userStore, routerStore } = store;

  // Provjera autorizacije
  const isLoggedIn = userStore.isLoggedIn;

  useEffect(() => {
   
    if (!isLoggedIn) {
      routerStore.goTo('login'); 
    }
  }, [isLoggedIn, routerStore]);

if (!isLoggedIn) {
  return null;
}
 

  return (
    <>
    {userStore.message && (
        <div className="status status--success">
          <span className="status__text">Uspješno ste se prijavili</span>
        </div>
      )}


    <div className="layout">
      
      <Navigation />
      <Header />
      <div className="layout__content">
        {children}
      </div>
      <Footer />
    </div>
    </>
  );
});

export default Layout;