import Header from '../../components/Header'

function Logement(props) {
  console.log(props)
  return (
    <>
      <Header />
      <img src={props.logement.cover} alt={props.logement.title} />
    </>
  )
}

export default Logement
