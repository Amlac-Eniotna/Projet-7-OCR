import Header from '../../components/Header'
import Carrousel from './components/Carrousel'

function Logement(props) {
  return (
    <>
      <Header />
      <Carrousel src={props.logement.pictures} alt={props.logement.title} />
    </>
  )
}

export default Logement
