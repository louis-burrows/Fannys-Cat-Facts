import styles from '../styles/Home.module.scss'

export default function Input(props) {

  
  return (
    <>
    <button onClick={props.returnFromAPI}>Fetch a new Fact</button>
    <div>
      {props.catFact}
      <button onClick={props.addAFact}>Add this Fact to Favourites</button>
    </div>
    </>
  )
}