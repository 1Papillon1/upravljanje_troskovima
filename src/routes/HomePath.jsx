import React from "react";
import { observer } from "mobx-react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import store from "../store/RootStore";




const HomePath = observer(() =>   {
    const routerStore = store.routerStore;

  

    return (
      <>
      <h2 className="layout__title">Upravljanje Troškovima</h2>
        <Card content={
           <section className="section">
              <header className="section__header">
                  
                  <p className="section__content">Upravljanje Troškovima aplikacija je razvijena kao dio 
                    diplomskog rada 
                    na temu "Upravljanje stanjem u Reactu uz korištenje MobX-a: Primjeri dobre prakse".
                    Upravlja Troškovima omogućuje unos, brisanje i uređivanje troškova 
                    korisnicima. Radi lakše organizacije i snalaženja, korisnici imaju mogućnost 
                    kategoriziranja troškova, kako bi dobili uvid u to, kolika im je potrošnja 
                    za određeni period. Grafičkim prikazima, korisnici dobivaju pregled usporenih vrijednosti 
                    svih kategorija koje sadrže troškove. Za jezgru aplikacije, te upravljanje cijelim state-om 
                    koristi se MobX, koji povezuje cijelu aplikaciju i komponente u svrhu dinamičkog upravljanja 
                    i organizacije svih elemenata koji su potrebni.</p>
              </header>

              <article className="section__article">
 
                  <div className="flex">
                      <div className="flex__block">
                          <h3 className="flex__block__title">Praćenje Troškova</h3>
                          <p>Unesite i pratite svoje troškove u različitim kategorijama.</p>
                      </div>
                      <div className="flex__block">
                          <h3 className="flex__block__title">Kategorizacija</h3>
                          <p>Organizirajte svoje troškove prema kategorijama za bolju preglednost.</p>
                      </div>
                      <div className="flex__block">
                          <h3 className="flex__block__title">Statistika</h3>
                          <p>Grafički prikaz troškova radi organiziranog pregleda troškova.</p>
                      </div>
                  </div>
              </article>

              <article className="section__footer">
                  
                 {/*  <Link to="/troskovi" className="section__link">Pregled troškova</Link> */}
              </article>
          </section>
          }/>
      </>
    );
}) 

export default HomePath;