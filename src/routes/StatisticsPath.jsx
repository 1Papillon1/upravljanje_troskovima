import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from "@mui/x-charts/PieChart";


export default function StatisticsPath() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [expenseCategoryLink, setExpenseCategoryLink] = useState([]);

  useEffect(() => {
      fetch('./storage/expenses.json')
          .then((response) => response.json())
          .then((data) => {
              setExpenses(data.expenses);
            
          })
          .catch((error) => {
              console.error("Fetching JSON data failed:", error);
          });

          fetch('./storage/categories.json')
          .then((response) => response.json())
          .then((data) => {
              setCategories(data.categories);
          })
          .catch((error) => {
              console.error("Fetching JSON data failed:", error);
          });

          fetch('./storage/ExpenseCategory.json')
          .then((response) => response.json())
          .then((data) => {
              setExpenseCategoryLink(data.expenseCategoryLink);
          })
          .catch((error) => {
              console.error("Fetching JSON data failed:", error);
          });
  }, []);

  // Povezivanje kategorija i troškova
  const expenseData = categories.map(category => {
      const total = expenses
          .filter(expense => expenseCategoryLink.some(link => link.expenseId === expense.id && link.categoryId === category.id))
          .reduce((sum, expense) => sum + expense.price, 0);
      return { name: category.name, total };
  }).filter(data => data.total > 0); 

  
  const pieData = expenseData.map(data => ({ name: data.name, value: data.total }));

  return (
    <>
    <h2 className="layout__title">Analiza troškova</h2>
      <Card content={
          <div className="section">
              <header className="section__header">
              <h3 className="section__title">Stupčasti grafikon</h3>
              </header>

                <article className="section__article">
                      <BarChart
                          series={[{ data: expenseData.map(item => item.total) }]}
                          xAxis={[{ data: expenseData.map(item => item.name), scaleType: 'band' }]}
                          height={290}
                          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                      />
                </article>

              
              
          </div>
      } />
       <Card content={
          <div className="section">
              <header className="section__header">
                <h3 className="section__title">Tortni grafikon</h3>
              </header>

                  <article className="section__article">
                      <PieChart
                          series={[{ data: pieData }]}
                          height={290}
                          margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
                      />
                  </article>
              
          </div>
      } />
    </>
  );
  }