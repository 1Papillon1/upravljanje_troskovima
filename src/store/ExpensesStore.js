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

    maximumExpenses = 5;
    storeMessage = null;
    priceChangeMessage = null;

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
        if (this.expenses.length > 0) {
            console.log("Troškovi su već dohvaćeni.");
            return;
        }
    
        this.loading = true;
    
        try {
            const expensesResponse = await fetch("./storage/expenses.json");
            const expensesData = await expensesResponse.json();
    
            const usersExpensesResponse = await fetch("./storage/usersExpenses.json");
            const usersExpensesData = await usersExpensesResponse.json();
    
            const authenticatedUser = this.store.userStore.authenticatedUser;
            if (!authenticatedUser) {
                throw new Error("Nema autoriziranog korisnika.");
            }
    
            const userExpenseLinks = usersExpensesData.usersExpensesLink.filter(
                link => link.userId === authenticatedUser.id
            );
    
            const userExpenses = expensesData.expenses.filter(expense =>
                userExpenseLinks.some(link => link.expenseId === expense.id)
            );
    
            runInAction(() => {
                this.expenses = userExpenses;
                this.loading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.error = "Pogreška prilikom dohvaćanja troškova.";
                this.loading = false;
            });
            console.error(error);
        }
    }

    constructor(store) {
        this.store = store;
        makeAutoObservable(this);
        
        autorun(() => {
            if (this.expenses.length >= 5) {
                runInAction(() => {
                    this.storeMessage = "Dosegli ste maksimalan broj troškova.";

                })
            } else {
                runInAction(() => {
                    this.storeMessage = null;
                })
            }
        });
  
        
        

    }

    get logUserExpenses() {
        console.log(this.expenses);
    }

    get totalPriceOfExpenses() {
        return this.expenses.reduce((total, expense) => total + expense.price, 0);
    }

 

    // create, edit, delete
    async createExpense(name, price, categoryId) {
       
        try {
            const expenseId = this.expenses.length > 0 
                ? this.expenses[this.expenses.length - 1].id + 1
                : 1;
    
            const expense = {
                id: expenseId,
                name,
                price
            };
    
           
    
           
            runInAction(() => {
                this.expenses.push(expense);
            
              });
    
        } catch (error) {
            console.error(error);
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
                console.error("Trošak nije pronađen.");
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
                console.error(`Trošak sa id-em: ${id} nije pronađen.`);
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
            console.error("Pogreška prilikom brisanja troška.");
        }
    }
    
    


}








export default ExpensesStore;