import styles from '../styles/Home.module.scss'
import CatFactComponent from "./CatFactComponent"


export default function List(props) {
  
  const changeCatFacts = (index) => {
    alert("delete clicked")
    const editedListOfFacts = [...props.listOfCatFacts];
    editedListOfFacts.splice(index, 1);
    props.editCatFacts(editedListOfFacts);
  }
  
  return (
    <>
      {(props.listOfCatFacts).map((catFact, index) => {
        return  <CatFactComponent catFact={catFact} key={index} index={index} changeCatFacts={changeCatFacts}/>
      })
    }
    </>
  )
}