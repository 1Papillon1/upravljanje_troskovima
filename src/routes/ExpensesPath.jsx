import React from "react";
import { useState, useEffect } from "react";
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
  const uiStore = store.uiStore;


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
      console.log("Spremanje troška:", expense); 
      await expensesStore.updateExpense(expense.id, { name: expense.name, price: expense.price });
      setView('list'); 
    }
  };

  const handleCreate = async () => {
    if (newExpense.name && newExpense.price && newExpense.categoryId) {
      console.log("Stvaranje troška:", newExpense); 
      await expensesStore.createExpense(newExpense.name, parseFloat(newExpense.price), parseInt(newExpense.categoryId));
      setView('list');
      setNewExpense({ name: "", price: "", categoryId: "" });
    } else {
      console.log("Pogrešan input:", newExpense);
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
                  <Table
                    content={
                      <>
                        <thead className="table__head">
                          <tr className="table__row">
                            <th className="table__heading">Id</th>
                            <th className="table__heading">
                              {uiStore.currentLanguage === "hr" ? "Naziv" : "Name"}
                            </th>
                            <th className="table__heading table__heading--right">
                              {uiStore.currentLanguage === "hr" ? "Iznos" : "Amount"}
                            </th>
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
                            <td colSpan={4}>
                              {expensesStore.storeMessage ? (
                                <div className="status status--message">
                                  {expensesStore.storeMessage}
                                </div>
                              ) : (
                                <button
                                  className="button button--table"
                                  onClick={() => setView("create")}
                                >
                                  {uiStore.currentLanguage === "hr" ? "+" : "+"}
                                </button>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td className="table__data">
                              {uiStore.currentLanguage === "hr" ? "Ukupno" : "Total"}
                            </td>
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
                        {uiStore.currentLanguage === "hr" ? "Naziv" : "Name"}
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
                        {uiStore.currentLanguage === "hr" ? "Cijena" : "Price"}
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

                      <div className="form__group form__group--secondary">
                        <button
                          type="button"
                          className="form__submit form__submit--secondary"
                          onClick={handleSave}
                        >
                          {uiStore.currentLanguage === "hr"
                            ? "Spremi promjene"
                            : "Save changes"}
                        </button>
                        <button
                          type="button"
                          className="form__submit form__submit--secondary"
                          onClick={() => setView("list")}
                        >
                          {uiStore.currentLanguage === "hr"
                            ? "Odustani"
                            : "Cancel"}
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
                            {uiStore.currentLanguage === "hr" ? "Naziv" : "Name"}
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
                            {uiStore.currentLanguage === "hr" ? "Cijena" : "Price"}
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
                            {uiStore.currentLanguage === "hr"
                              ? "Kategorija ID"
                              : "Category ID"}
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

                      <div className="form__group form__group--secondary">
                        <button
                          type="button"
                          className="form__submit form__submit--secondary"
                          onClick={handleCreate}
                        >
                          {uiStore.currentLanguage === "hr"
                            ? "Kreiraj trošak"
                            : "Create expense"}
                        </button>
                        <button
                          type="button"
                          className="form__submit form__submit--secondary"
                          onClick={() => setView("list")}
                        >
                          {uiStore.currentLanguage === "hr"
                            ? "Odustani"
                            : "Cancel"}
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