import styles from '../styles/List.module.scss'
import CatFactComponent from "./CatFactComponent"

export default function List(props) {
  

  const changeCatFacts = (index) => {
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