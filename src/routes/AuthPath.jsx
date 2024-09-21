import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import { observer } from "mobx-react";
import store from "../store/Store";
import { useNavigate } from "react-router-dom";



const AuthPath = observer(() =>  {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

 
  

    const handleSubmit = (e) => {
      e.preventDefault();

      store.userStore.validateUser(email, password);
      
      const userAuthorized = store.userStore.authenticatedUser;

      if (!userAuthorized) {
        setError('Korisnički podaci nisu točni!');
      } else {
        setError('');
        navigate('/pocetna');
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
  });

export default AuthPath;