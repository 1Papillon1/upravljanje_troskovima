import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Table from "../components/Table";

export default function ExpensesPath() {


    return (
      <>
        <Card content={<Table />}/>
      </>
    );
  }