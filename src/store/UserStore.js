import { makeAutoObservable, runInAction, when } from 'mobx';
import bcrypt from "bcryptjs-react";
import store from "./RootStore";

class UserStore {

    // observable
    users = [];
    authenticatedUser = null;
    loadingUsers = false;
    errorUsers = null;
    isLoggedIn = false;
    message = null;

    constructor(store) {
        this.store = store;
        makeAutoObservable(this);
        this.fetchUsers();
        this.rememberUser();

        this.messageDispose = when (
            () => this.isLoggedIn === true,

            () => {
                runInAction(() => {
                    this.message = `${this.authenticatedUser.name}, uspješno ste se prijavili.`;
                })

                const timer = setTimeout(() => {
                    runInAction(() => {
                        this.message = null;
                    });

                    this.messageDispose();
                }, 5000);


            }
        )
    }


    // action
    async fetchUsers() {
        this.loadingUsers = true;
        try {
            const response = await fetch('./storage/users.json');
            const data = await response.json();
            runInAction(() => {
                this.users = data.users;
                this.loadingUsers = false;
            });
        } catch (error) {
            runInAction(() => {
                this.errorUsers = 'Pogreška prilikom dohvaćanja korisnika.';
                this.loadingUsers = false;
            });
        }
    }

    
    // action
    rememberUser() {
        const loggedUser = localStorage.getItem('authUser');
        if (loggedUser) {
            this.authenticatedUser = JSON.parse(loggedUser);
            this.isLoggedIn = true;
        }
    }

    // action
    validateUser(email, password) {
        const user = this.users.find((u) => u.email === email);
        if (user && bcrypt.compare(password, user.password)) { 
            this.authenticatedUser = user;
            this.isLoggedIn = true;
            localStorage.setItem('authUser', JSON.stringify(user));
        } else {
            this.authenticatedUser = null;
            this.isLoggedIn = false;
        }
    }


    // action
    logoutUser() {
        this.authenticatedUser = null;
        this.isLoggedIn = false;
        localStorage.removeItem('authUser');
    }
}

export default UserStore;