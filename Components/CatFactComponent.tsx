import styles from '../styles/CatFactComponent.module.scss'

type CatFactComponent = {
  catFact: string,
  index: number,
  changeCatFacts: (index: number) => void
}


const CatFactComponent: React.FC<CatFactComponent> = ({ catFact, index, changeCatFacts }): JSX.Element => {

  return (
    <>
      <div className={styles.factContainer}>
        <img className={styles.kitty} src="/images/catCartoon.png" alt="Picture of the author" />
        <p className={styles.factText}>{catFact}</p>
        <button className={styles.deleteButton} onClick={() => changeCatFacts(index)}>Delete Cat Fact From List</button>
      </div>
      <div className={styles.spacerLine} />
    </>
  )
}

export default CatFactComponent;
