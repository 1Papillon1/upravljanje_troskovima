import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Table from "../components/BasicTable";
import Form from "../components/Form";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { observer } from "mobx-react";
import store from "../store/RootStore";

const ExpensesPath = observer(() => {
  const routerStore = store.routerStore;
  const expensesStore = store.expensesStore;
  const userStore = store.userStore;

  const totalPriceOfExpenses = expensesStore.totalPriceOfExpenses;

  const [view, setView] = useState('list');
  const [expense, setExpense] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newExpense, setNewExpense] = useState({ name: "", price: "", categoryId: "" });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await expensesStore.fetchExpenses();
      setLoading(false);
    };

    const getMessage = () => {
      return expensesStore.storeMessage;
    };

    fetchData();
    getMessage();
  }, []); 

  const handleEdit = (expense) => {
    setExpense(expense); 
    setView('edit');
  };

  const handleDelete = async (expenseId) => {
    await expensesStore.deleteExpense(expenseId); 
  };

  const handleSave = async () => {
    if (expense) {
      console.log("Saving expense:", expense); 
      await expensesStore.updateExpense(expense.id, { name: expense.name, price: expense.price });
      setView('list'); 
    }
  };

  const handleCreate = async () => {
    if (newExpense.name && newExpense.price && newExpense.categoryId) {
      console.log("Creating expense:", newExpense); 
      await expensesStore.createExpense(newExpense.name, parseFloat(newExpense.price), parseInt(newExpense.categoryId));
      setView('list');
      setNewExpense({ name: "", price: "", categoryId: "" });
    } else {
      console.log("Invalid inputs for new expense:", newExpense);
    }
  };

  return (
    <>
      {!loading && (
        <Card
          content={
            <>
              
              {view === "list" ? (
                <>

              {expensesStore.storeMessage ? (
                <div className="status status--message">
                  {expensesStore.storeMessage}
                </div>
              ) : (
                <button
                  className="form__submit form__submit--primary"
                  onClick={() => setView('create')}
                >
                  Dodaj Trošak
                </button>
              )}

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
                                <div
                                  className="table__button"
                                  onClick={() => handleEdit(expense)}
                                >
                                  <EditIcon className="table__icon" />
                                </div>
                                <div
                                  className="table__button"
                                  onClick={() => handleDelete(expense.id)}
                                >
                                  <DeleteIcon className="table__icon" />
                                </div>
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td className="table__data">Total</td>
                            <td></td>
                            <td className="table__data">
                              {totalPriceOfExpenses}€
                            </td>
                            <td className="table__data table__data--group"></td>
                          </tr>
                        </tbody>
                      </>
                    }
                  />
                </>
              ) : view === "edit" ? (
                <Form
                  routerStore={routerStore}
                  content={
                    <>
                      <label
                        className="form__label form__label--secondary"
                        htmlFor="name"
                      >
                        Naziv
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form__input form__input--secondary"
                        value={expense?.name || ""}
                        onChange={(e) =>
                          setExpense({ ...expense, name: e.target.value })
                        } 
                      />

                      <label
                        className="form__label form__label--secondary"
                        htmlFor="price"
                      >
                        Cijena
                      </label>
                      <input
                        id="price"
                        type="number"
                        className="form__input form__input--secondary"
                        value={expense?.price || ""}
                        onChange={(e) =>
                          setExpense({
                            ...expense,
                            price: parseFloat(e.target.value),
                          })
                        } 
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
                          onClick={() => setView("list")}
                        >
                          Odustani
                        </button>
                      </div>
                    </>
                  }
                />
              ) : (
                <Form
                  routerStore={routerStore}
                  content={
                    <>
                    <div className="flex">
                   
                      <div className="form__group form__group--column">
                          <label
                            className="form__label form__label"
                            htmlFor="name"
                          >
                            Naziv
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="form__input form__input"
                            value={newExpense.name}
                            onChange={(e) =>
                              setNewExpense({ ...newExpense, name: e.target.value })
                            }
                          />
                        </div>

                        <div className="form__group form__group--column">
                        <label
                          className="form__label form__label"
                          htmlFor="price"
                        >
                          Cijena
                        </label>
                        <input
                          id="price"
                          type="number"
                          className="form__input form__input"
                          value={newExpense.price}
                          onChange={(e) =>
                            setNewExpense({
                              ...newExpense,
                              price: e.target.value,
                            })
                          }
                        />
                        </div>

                        <div className="form__group form__group--column">
                        <label
                          className="form__label form__label"
                          htmlFor="categoryId"
                        >
                          Kategorija ID
                        </label>
                        <input
                          id="categoryId"
                          type="number"
                          className="form__input form__input"
                          value={newExpense.categoryId}
                          onChange={(e) =>
                            setNewExpense({
                              ...newExpense,
                              categoryId: e.target.value,
                            })
                          }
                        />
                        </div>
                      </div>

                      <div className="form__group">
                        <button
                          type="button"
                          className="form__submit form__submit--secondary"
                          onClick={handleCreate}
                        >
                          Kreiraj trošak
                        </button>
                        <button
                          type="button"
                          className="form__submit form__submit--secondary"
                          onClick={() => setView("list")}
                        >
                          Odustani
                        </button>
                      </div>
                    </>
                  }
                />
              )}
            </>
          }
        />
      )}
    </>
  );
});

export default ExpensesPath;