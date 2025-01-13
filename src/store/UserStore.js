import { makeAutoObservable, runInAction } from 'mobx';
import bcrypt from 'bcryptjs/dist/bcrypt';

class UserStore {

    // observable
    users = [];
    authenticatedUser = null;
    loadingUsers = false;
    errorUsers = null;

    constructor(store) {
        this.store = store;
        makeAutoObservable(this);
        this.fetchUsers();
        this.rememberUser();
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
        }
    }

    // action
    validateUser(email, password) {
        const user = this.users.find((u) => u.email === email);
        if (user && bcrypt.compare(password, user.password)) { 
            this.authenticatedUser = user;
            localStorage.setItem('authUser', JSON.stringify(user));
        } else {
            this.authenticatedUser = null;
        }
    }


    // action
    logoutUser() {
        this.authenticatedUser = null;
        localStorage.removeItem('authUser');
    }
}

export default UserStore;