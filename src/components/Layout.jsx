import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { observer } from "mobx-react";
import store from "../store/RootStore";

const Layout = observer(({ children }) => {
  const { userStore, routerStore } = store;

  // Provjera autentifikacije
  const isAuthenticated = userStore.authenticatedUser !== null;

  useEffect(() => {
   
    if (!isAuthenticated) {
      routerStore.goTo('login'); 
    }
  }, [isAuthenticated, routerStore]);


  if (!isAuthenticated) {
    return null; 
  }

  return (
    <>
    <div class="status status--success">
        <span class="status__text">Uspješno ste se prijavili.</span>
      </div>
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