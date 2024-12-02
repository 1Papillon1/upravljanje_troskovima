import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Table from "../components/BasicTable";
import Form from "../components/Form";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import store from "../store/RootStore";

const ExpensesPath = observer(() =>   {
  // parent i store elementi
  const routerStore = store.routerStore;
const expensesStore = store.expensesStore;
const userStore = store.userStore;


  
  const [view, setView] = useState('list');
  const [expense, setExpense] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      if (expensesStore.expenses) {
        setView('edit');
        
      } else {

        setView('list')
      }


      setLoading(false);
  },[expensesStore.expenses])
 
  const handleEdit = (expense) => {

    expensesStore.expenseseditExpense(expense.id);
    setExpense(expense);
    setView('edit');


  }

  const handleDelete = async (expenseId) => {

    await expensesStore.expensesdeleteExpense(expenseId);

  };

  
  const handleSave = async () => {

    await expensesStore.expensesupdateExpense(expense.id, { name: expense.name, price: expense.price });
    setView('list'); 

  }; 

  const getExpenses = async () => {
    console.log(userStore.authenticatedUser);
    console.log(expensesStore.expenses);
  }


    return (
      <>
      <Card content= {
        <>
        <button onClick={() => getExpenses()}>Get</button>
        </>
      } />
      {/*  {!loading && (
        <Card 
          content={
          view === "list" ? (
              <Table 
                content={
                  <>
                    <thead className="table__head">
                      <tr className="table__row">
                        <th className="table__heading">Id</th>
                        <th className="table__heading">Naziv</th>
                        <th className="table__heading table__heading--right">Iznos</th>
                        <th className="table__heading table__heading--right table__heading--group"></th>
                      </tr>

                    </thead>
                    <tbody>
                      {expensesStore.expenses.map((expense) => (
                        <tr className="table__row" key={expense.id}>
                          <td className="table__data">{expense.id}</td>
                          <td className="table__data">{expense.name}</td>
                          <td className="table__data">{expense.price}€</td>
                          <td className="table__data table__data--group">
                            
                            <div className="table__button" onClick={() => handleEdit(expense)}>
                              <EditIcon className="table__icon" />
                            </div>


                            <div className="table__button" onClick={() => handleDelete(expense.id)}>
                              <DeleteIcon className="table__icon" />
                            </div>
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </>
                }
              />
            ) : (
              <Form 
              routerStore={routerStore}
                content={
                  <>
                    <label className="form__label form__label--secondary" htmlFor="name">Naziv</label>
                    <input 
                      id="name"
                      type="text"
                      className="form__input form__input--secondary"
                      value={expense.name}
                      onChange={(e) => setExpense({ ...expense, name: e.target.value })} // Ažuriraj ime troška
                    />
    
                    <label className="form__label form__label--secondary" htmlFor="price">Cijena</label>
                    
                    <input 
                      id="price"
                      type="number"
                      className="form__input form__input--secondary"
                      value={expense.price}
                      onChange={(e) => setExpense({ ...expense, price: parseFloat(e.target.value) })} // Ažuriraj cijenu troška
                    />
    
                    <div className="form__group">
                      <button 
                        type="button" 
                        className="form__submit form__submit--secondary"
                        onClick={handleSave}

                      >
                        Spremi promjene
                      </button>
                      <button 
                        type="button" 
                        className="form__submit form__submit--secondary"
                        onClick={() => setView('list')} // Vraća na listu
                      >

                      Odustani
                      </button>
                    </div>
                  </>
                }
              />
            )
          }
        />
      )} */}
    
    </>
    );
})

export default ExpensesPath;