import styles from '../styles/CatFactComponent.module.scss'

export default function CatFactComponent(props) {

  return (
    <>
      <div className={styles.factContainer}>
        <p className={styles.factText}>{props.catFact}</p>
        <button className={styles.deleteButton} onClick={() => props.changeCatFacts(props.index)}>Delete Cat Fact From List</button>
      </div>
      <div className={styles.spacerLine}></div>
      </>
  )
}