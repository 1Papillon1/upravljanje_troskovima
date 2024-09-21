import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Table from "../components/BasicTable";
import { observer } from "mobx-react";
import store from "../store/Store";

const ExpensesPath = observer(() =>  {

 


    return (
      <>
        <Card content={<Table />}/>
      </>
    );
});

export default ExpensesPath;