import React, { useState, useEffect } from 'react';

import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Input from "../Components/Input"
import List from "../Components/List"

export default function Home() {

  const [catFact, setCatFact] = useState("Cats are awesome");

  const [listOfCatFacts, editCatFacts] = useState([])
  
  

  useEffect(() => {
    localStorage.setItem("listOfFactsOnLocal", JSON.stringify(listOfCatFacts))
    console.log(JSON.parse(localStorage.getItem("listOfFactsOnLocal")))
  }, [listOfCatFacts]);
  
  
  const returnFromAPI = () => {
    fetch("https://catfact.ninja/fact")
      .then(response => {
      return response.json();
      })
      .then(responseJson => {
        setCatFact(responseJson.fact)
        return responseJson.fact;
      })
      .catch(error => {
        console.log(error);
      })
  }

  const addAFact = () => {
    editCatFacts(listOfCatFacts => [catFact, ...listOfCatFacts])
  }

  return (
    <>
    <Head>
      <title>Fanny's Cat Facts</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.appContainer}>
      <h1 className={styles.title}>
        Welcome to your personal vault of cat knowledge.
      </h1>
  
      <Input returnFromAPI={returnFromAPI} catFact={catFact} addAFact={addAFact}/>
      <List listOfCatFacts={listOfCatFacts} editCatFacts={editCatFacts}/>
    </div>
    </>
  )
}



