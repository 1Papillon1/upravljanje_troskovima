import React from "react";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { observer, inject } from "mobx-react";
import { runInAction } from "mobx";
import { useNavigate } from "react-router-dom";
import store from "../store/Store";


const Root = observer(() =>  {

  const navigate = useNavigate();


  useEffect(() => {
        if (!store.userStore.authenticatedUser) {
          navigate("/login");
        } 
        console.log(store.userStore.authenticatedUser);
  },[])
  
    return (
      <>
        <Layout />
      </>
    );
  });

export default Root;