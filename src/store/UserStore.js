import { autorun, makeAutoObservable, runInAction, computed } from "mobx";
import expensesStore from "./ExpensesStore";

const bcrypt = require('bcryptjs');

class UserStore {

    
    
    // observable
    users=[];
    loadingUsers = false;
    errorUsers = null;
    authenticatedUser = null;
    usersExpensesLink = [];

    // action
    async fetchUsers() {
        this.loading = true;
        try {
            const response = await fetch("./storage/users.json");
            
            const data = await response.json();
            
          
            runInAction(() => {
                this.users = data.users;
                this.loading = false;
                
            });
            
        } catch (error) {
            
            runInAction(() => {
                this.error = "Pogreška prilikom dohvaćanja korisnika.";
                this.loading = false;
            })
        }

        
        
    }

    // action
    async fetchUserExpensesLink() {
        this.loading = true;
        try {
            const response = await fetch("./storage/usersExpenses.json");
            const data = await response.json();

           

            if (!this.authenticatedUser) {
                throw new Error("Korisnik trenutno nije ulogiran");
            } 


            runInAction(() => {
                this.usersExpensesLink = data.usersExpensesLink;
                this.loading = false;
                
            });
        } catch (error) {
            runInAction(() => {
                this.error = "Pogreška prilikom dohvaćanja linka.";
                this.loading = false;
            })
        }
        
    }

    constructor(store) {
        this.store = store;
        makeAutoObservable(this);
        this.fetchUsers();
        this.fetchUserExpensesLink();
        this.rememberUser();
    }

    // action
    rememberUser() {
        const loggedUser = localStorage.getItem("authUser");
        

        if (loggedUser) {
            this.authenticatedUser = JSON.parse(loggedUser);
        } else {
            this.authenticatedUser = null;
        }
    }

    // action
    logoutUser() {

        this.authenticatedUser = null;
        console.log("Korisnik se odjavio.");
       
    }

    // action
    validateUser(email, password) {
        
       const userWithMail = this.users.find(user => user.email === email)
        

        if (userWithMail) {
            try {
                const passwordMatches = bcrypt.compareSync(password, userWithMail.password);
           
                // const passwordMatches = await verify({pass: password, encoded: userWithMail.password})
                if (passwordMatches) {
                  
                    this.authenticatedUser = userWithMail;

                    console.log("Logged in as: " + this.authenticatedUser.name );
                    expensesStore.fetchExpenses();
     
                }
            } catch(error) {
                console.error(error);
                
            }
        } else {
            this.authenticatedUser = null;
        } 
    }

    // computed
    get numberOfUsers() {
        return this.users.length;
    }

}

export default UserStore;