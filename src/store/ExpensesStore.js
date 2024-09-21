import userEvent from "@testing-library/user-event";
import { autorun, makeAutoObservable, runInAction } from "mobx";
import store from "./Store";

class ExpensesStore {

    store;

    expenses=[];
    loadingExpenses = false;
    errorExpenses = null;

    async fetchExpenses() {
        this.loading = true;
        
      try { 
            const response = await fetch("./storage/expenses.json");
            const data = await response.json();
           

          const authenticatedUser = store.userStore.authenticatedUser;
          

            if (!authenticatedUser) {
                throw new Error("Korisnik trenutno nije ulogiran");
                
            } else { 

        

            const userExpenses = data.expenses.filter(expense => {
                return store.userStore.usersExpensesLink.some(
                    link => link.userId === authenticatedUser.id && link.expenseId === expense.id
                );

            }) 
            runInAction(() => {
                this.expenses = userExpenses ?? [];
                this.loading = false;
                console.log(this.expenses);
            });
            console.log(this.expenses);
            }
          
         } catch (error) {
            runInAction(() => {
                this.error = "Pogreška prilikom dohvaćanja troškova.";
                this.loading = false;
            })
        }
        
     } 

    constructor(store) {
        this.store = store;
        makeAutoObservable(this);
        this.fetchExpenses();
                
  

    }

    get currentUserExpenses() {

        return this.expenses;

       
    }

    // edit and delete
    

    

}

const expensesStore = new ExpensesStore();
export default expensesStore;