import styles from '../styles/Home.module.scss'

export default function CatFactComponent(props) {

  console.log(props.catFact)
  return (
    <>
      <p>{props.catFact}</p>
      <button onClick={() => props.changeCatFacts(props.index)} key={props.key}>Delete Cat Fact From List</button>
    </>
  )
}