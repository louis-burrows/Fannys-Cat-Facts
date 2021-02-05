import type { resultFromAPI } from "../types"

import React, { useState, useEffect } from 'react';

import Head from 'next/head';

import styles from '../styles/Home.module.scss';

import Input from "../Components/Input";
import List from "../Components/List";


const Home: React.FC = (): JSX.Element => {

  const localCall = (): string[] => {
    if (typeof localStorage !== "undefined") {
      const listOfCatFactsLocalStorage = localStorage.getItem("listOfFactsOnLocal");
      if (listOfCatFactsLocalStorage !== null) {
        return JSON.parse(listOfCatFactsLocalStorage);
      }
    }
    return [];
  };


  const [catFact, setCatFact] = useState<string>("Cats are awesome!");

  // this will make sure that the fetch from local storage only occurs once on page load. Makes the app faster.
  const [listOfCatFacts, editCatFacts] = useState(() => localCall())

  const [buttonDisabled, toggleDisabled] = useState(false)

  useEffect(() => {
    localStorage.setItem("listOfFactsOnLocal", JSON.stringify(listOfCatFacts))
    console.log(JSON.parse(localStorage.getItem("listOfFactsOnLocal") || ''))
  }, [listOfCatFacts]);

  const returnFromAPI = () => {
    fetch("https://catfact.ninja/fact")
      .then(response => {
        return response.json();
      })
      .then((responseJson: resultFromAPI) => {
        toggleDisabled(false);
        setCatFact(responseJson.fact);
        return responseJson.fact;
      })
      .catch(error => {
        console.log(error);
      });
  };

  const addAFact = () => {
    editCatFacts((listOfCatFacts: string[]) => [catFact, ...listOfCatFacts]);
    toggleDisabled(true);
  };


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

        <Input returnFromAPI={returnFromAPI} catFact={catFact} addAFact={addAFact} buttonDisabled={buttonDisabled} />
        <List listOfCatFacts={listOfCatFacts} editCatFacts={editCatFacts} />

      </div>
    </>
  )
}

export default Home;


