import styles from '../styles/Input.module.scss'

export default function Input(props) {

  
  return (
    <>
    <div className={styles.inputWrapper}>
      <button className={styles.fetchButton} onClick={props.returnFromAPI}>Fetch a new Fact</button>
      <div className={styles.catText}>
        {props.catFact}
      </div>
        <button className={styles.postButton} onClick={props.addAFact}>Add this Fact to Favourites</button>
    </div>
    </>
  )
}