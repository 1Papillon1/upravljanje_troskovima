import userEvent from "@testing-library/user-event";
import { autorun, makeAutoObservable, runInAction } from "mobx";
import store from "./RootStore";

class ExpensesStore {

    store;

    // observable
    expenses=[];
    expense;
    expensesCategories=[];
    loadingExpenses = false;
    errorExpenses = null;

    // action
    async fetchExpensesCategories() {
        this.loading = true;
        
        try { 
              const response = await fetch("./storage/expenseCategory.json");
              const data = await response.json();
             
  
            const authenticatedUser = store.userStore.authenticatedUser;
            
  
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
              
            
           } catch (error) {
              runInAction(() => {
                  this.error = "Pogreška prilikom dohvaćanja troškova.";
                  this.loading = false;
              })
          }
    }


    // action
    async fetchExpenses() {
        this.loading = true;
        const response = await fetch("./storage/expenses.json");
            const data = await response.json();
            
        
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
        
                
  

    }

    get currentUserExpenses() {

        return this.expenses;

       
    }

    // create, edit, delete
    async createExpense(name, price, categoryId) {


        try {
            const expenseId = this.expenses.length > 0 ? Math.max(this.expenses.map(expense => expense.id)) + 1 : 1;

            const expense = {
                id: expenseId,
                name,
                price
    
            };

            const expenseUserLinkId = store.userStore.usersExpensesLink.length > 0 ? Math.max(store.userStore.usersExpensesLink.map(userExpense => userExpense.id)) + 1 : 1; 

            const expenseUserLink = {
                id: expenseUserLinkId,
                expenseId: expenseId,
                userId: store.userStore.authenticatedUser.id,
            }

            const expenseCategoryLinkId = this.expensesCategories.length > 0 ? Math.max(this.expensesCategories.map(expenseCategory => expenseCategory.id)) + 1 : 1;

            const expenseCategoryLink = {
                id: expenseCategoryLinkId,
                expenseId: expenseId,
                categoryId
            }

            runInAction(() => {
                this.expenses.push(expense);
                store.userStore.usersExpensesLink.push(expenseUserLink);
                this.expensesCategories.push(expenseCategoryLink);
            })

        } catch(error) {
            console.error(error)
        }

        
    }

    async editExpense(id) {
        try {
           
            const expense = this.expenses.find(expense => expense.id === id);
    

            if (expense) {
             
                runInAction(() => {
                    this.expense = { ...expense };
                });

            } else {
                console.error("Expense not found.");
            }

        } catch (error) {
            console.error(error);
        }
    }

    async updateExpense(id, updatedCols) {
        try {
            const expenseInd = this.expenses.findIndex(expense => expense.id === id);
    
            if (expenseInd !== -1) {
              
                const updatedExpense = {
                    ...this.expenses[expenseInd],
                    ...updatedCols, 
                };
    
                runInAction(() => {

                    this.expenses[expenseInd] = updatedExpense;
    
  
                    this.expense = null;
                });
            } else {
                console.error(`Expense with id ${id} not found.`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async deleteExpense(id) {
        try {
            runInAction(() => {
                this.expenses = this.expenses.filter(expense => expense.id !== id);
            })
        } catch (error) {
            console.error("Failure during the delete of expense");
        }
    }
    

    

}
export default ExpensesStore;