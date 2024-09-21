import React from "react";
import Table from '@mui/joy/Table';
import { useState, useEffect } from "react";
import { observer } from "mobx-react";
import store from "../store/Store";



const BasicTable = observer(() =>  {

    

    return (
    <>
        {store.expensesStore.expenses.length > 0 ? (
        <Table className="table" aria-label="basic table" sx={{ '& tr > *:is(:last-child)': { textAlign: 'right' } }}>
        <thead className="table__head">
          <tr className="table__row">
            <th className="table__heading">Id</th>
            <th className="table__heading">Naziv</th>
            <th className="table__heading table__heading--right">Iznos</th>
          </tr>
        </thead>
        <tbody>

        {store.expensesStore.expenses.map((expense) => {
            return(
                <tr className="table__row" key={expense.id}>
                    <td className="table__data">{expense.id}</td>
                    <td className="table__data">{expense.name}</td>
                    <td className="table__data">{expense.price}€</td>
                </tr>
            )
        })}
         

        </tbody>
      </Table>

    ) : (
        <h2>Loading...</h2>
    )}
      </>
    )
});

export default BasicTable;