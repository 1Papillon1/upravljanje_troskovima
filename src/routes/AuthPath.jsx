import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { observer } from "mobx-react";
import store from "../store/RootStore";





const AuthPath = observer(() =>   {



  const routerStore = store.routerStore;


  
  const userStore  = store.userStore;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


 useEffect(() => {
  if (routerStore.route.name === 'home') {
    
  }
 })
  

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email, password);

      userStore.validateUser(email, password);
      
      const userAuthorized = userStore.authenticatedUser;
     
    if (!userAuthorized) {
        setError('Korisnički podaci nisu točni!');
     
      } else {
        store.routerStore.goTo('pocetna');
        setError('');

        console.log('Korisnik uspješno prijavljen.');
       
      } 
    }


    return (
      <div className="flex flex--centered">
        <div className="flex__box">
          <Form content={
            <>
               <h2 className="form__title">Prijava</h2>
                
                <label className="form__label" htmlFor="email">Email</label>
                <input 
                  id="email"
                  type="text"
                  className="form__input"
                  placeholder="Unesite vaš mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 
                />
                
                <label className="form__label" htmlFor="password">Lozinka</label>
                <input 
                  id="password"
                  type="password"
                  className="form__input"
                  placeholder="Unesite vašu lozinku"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="form__error">{error}</p>}
                <button type="submit" onClick={handleSubmit} className="form__submit">Prijava</button>
                
            </>
          }/>
        </div>
      </div>
    );
  })

  export default AuthPath; 