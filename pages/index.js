import React, { useState } from 'react';

import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Input from "../Components/Input"
import List from "../Components/List"

export default function Home() {

  const [catFact, setCatFact] = useState(["Cats are awesome"]);

  const [listOfCatFacts, editCatFacts] = useState([])

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
    <div className={styles.sassWorks}>
      Hello
    </div>

    <Input returnFromAPI={returnFromAPI} catFact={catFact} addAFact={addAFact}/>
    <List listOfCatFacts={listOfCatFacts} editCatFacts={editCatFacts}/>
    </>
  )
}
