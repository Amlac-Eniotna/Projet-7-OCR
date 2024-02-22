import Appartement from './Appartement'

function Location(props) {
  //génère le nombres de cartes de logements pour la page home
  const logements = props.logements.map((appart) => (
    <Appartement logement={appart} key={appart.id} />
  ))
  return (
    <section className="location_section">
      <div className="location">{logements}</div>
    </section>
  )
}

export default Location
