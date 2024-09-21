import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";



export default function AuthPath() {

    return (
      <div className="flex flex--centered">
        <div className="flex__box">
          <Form content={
            <>
               <h2 className="form__title">Prijava</h2>
                
                <label className="form__label" htmlFor="username">Korisničko ime</label>
                <input 
                    id="username"
                    type="text"
                    className="form__input"
                    placeholder="Unesite korisničko ime"
                />
                
                <label className="form__label" htmlFor="password">Lozinka</label>
                <input 
                    id="password"
                    type="password"
                    className="form__input"
                    placeholder="Unesite lozinku"
                />
                
                <button type="submit" className="form__submit">Prijavi se</button>
            </>
          }/>
        </div>
      </div>
    );
  }