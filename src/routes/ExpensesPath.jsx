import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Table from "../components/BasicTable";

export default function ExpensesPath() {


    return (
      <>
        <Card content={<Table />}/>
      </>
    );
}