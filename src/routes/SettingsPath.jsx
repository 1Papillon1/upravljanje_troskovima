import React from "react";
import Card from "../components/Card";
import Form from "../components/Form";


export default function SettingsPath() {

    return (
        <>
        <h2 className="layout__title">Profil</h2>
            <Card content={
                <div className="section">
                     <Form content={
                        <>
                            <label className="form__label form__label--secondary" htmlFor="email">Email</label>
                            <input 
                                id="email"
                                type="email"
                                className="form__input form__input--secondary"
                                disabled
                            />
                            
                            <label className="form__label form__label--secondary" htmlFor="username">Korisničko ime</label>
                            <input 
                                id="username"
                                type="text"
                                className="form__input form__input--secondary"
                                disabled
                            />
                            
                            <label className="form__label form__label--secondary" htmlFor="password">Lozinka</label>
                            <input 
                                id="password"
                                type="password"
                                className="form__input form__input--secondary"
                                disabled
                            />
                            
                            <button type="button" className="form__submit form__submit--secondary">Uredi</button>
                        </>
                    }/>
                </div>

            }/>
        </>
    )
}