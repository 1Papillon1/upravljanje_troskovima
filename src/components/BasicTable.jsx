import React from "react";
import Table from '@mui/joy/Table';
import { useState, useEffect } from "react";


export default function BasicTable() 
{
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetch('./storage/localStorage.json')
            .then((response) => response.json())
            .then((data) => {
                setExpenses(data.expenses);
            })
            .catch((error) => {
                console.error("Fetching JSON data failed:", error);
            })
    }, []);
    
    

    return (
    <>
        {expenses.length > 0 ? (
        <Table className="table" aria-label="basic table" sx={{ '& tr > *:is(:last-child)': { textAlign: 'right' } }}>
        <thead className="table__head">
          <tr className="table__row">
            <th className="table__heading">Id</th>
            <th className="table__heading">Naziv</th>
            <th className="table__heading table__heading--right">Iznos</th>
          </tr>
        </thead>
        <tbody>

        {expenses.map((expense) => {
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
}