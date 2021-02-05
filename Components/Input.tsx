import React, { useState, useEffect } from 'react';

import styles from '../styles/Input.module.scss'

type Input = {
  returnFromAPI: () => void,
  catFact: string,
  buttonDisabled: boolean,
  addAFact: () => void
}


const Input: React.FC<Input> = ({ returnFromAPI, catFact, buttonDisabled, addAFact }): JSX.Element => {

  return (
    <>
      <div className={styles.inputWrapper}>

        <button
          className={styles.fetchButton}
          onClick={returnFromAPI}>
          Fetch a new Fact
      </button>

        <div
          className={styles.catText}>
          {catFact}
        </div>

        <button
          disabled={buttonDisabled}
          className={styles.postButton}
          onClick={addAFact}>
          Add this Fact to Favourites
      </button>

      </div>
    </>
  )
}

export default Input;