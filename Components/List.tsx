import styles from '../styles/List.module.scss'
import CatFactComponent from "./CatFactComponent"

type List = {
  editCatFacts: (facts: string[]) => void,
  listOfCatFacts: string[]
}

const List: React.FC<List> = ({ listOfCatFacts, editCatFacts }): JSX.Element => {

  const changeCatFacts = (index: number) => {
    const editedListOfFacts = [...listOfCatFacts];
    editedListOfFacts.splice(index, 1);
    editCatFacts(editedListOfFacts);
  }

  return (
    <>

      {(listOfCatFacts).map((catFact, index) => {
        return <CatFactComponent catFact={catFact} key={index} index={index} changeCatFacts={changeCatFacts} />
      })
      }

    </>
  )
}

export default List;