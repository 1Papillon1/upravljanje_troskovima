import { autorun, makeAutoObservable, runInAction } from "mobx";


class UserStore {
    store;
    
    users=[];
    loadingUsers = false;
    errorUsers = null;
    authenticatedUser = null;
    usersExpensesLink = [];

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

    
    rememberUser() {
        const loggedUser = localStorage.getItem("authUser");
        

        if (loggedUser) {
            this.authenticatedUser = JSON.parse(loggedUser);
        } else {
            this.authenticatedUser = null;
        }
    }

    logoutUser() {
        this.authenticatedUser = null;
        localStorage.removeItem("authUser");
       
    }

    validateUser(email, password) {
        const userWithMail = this.users.find(user => user.email === email)
        let bcrypt = require('bcryptjs');

        if (userWithMail) {
            try {
            const passwordMatches = bcrypt.compareSync(password, userWithMail.password);
                if (passwordMatches) {
                    localStorage.setItem("authUser", JSON.stringify(userWithMail));
                    this.authenticatedUser = userWithMail;

                    console.log("Logged in as: " + this.authenticatedUser.name );
                }
            } catch(error) {
                console.error(error);
            }
        }
    }

}

const userStore = new UserStore();
export default userStore;