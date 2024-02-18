import Header from '../../components/Header'
import Carrousel from './components/Carrousel'
import DropDown from '../../components/DropDown'

function Logement(props) {
  let tags = props.logement.tags.map((tag) => (
    <p key={tag} className="info__tagslist--tag">
      {tag}
    </p>
  ))

  return (
    <>
      <Header />
      <Carrousel src={props.logement.pictures} alt={props.logement.title} />
      <section className="info">
        <div className="info__left">
          <h1 className="info__title">{props.logement.title}</h1>
          <h2 className="info__location">{props.logement.location}</h2>
          <div className="info__tagslist">{tags}</div>
        </div>
        <div className="info__right">
          <div className="info__user">
            <h2 className="info__user--name">
              {props.logement.host.name.replace(' ', '\n')}
            </h2>
            <img
              src={props.logement.host.picture}
              alt="utilisateur"
              className="info__user--img"
            />
          </div>
          <p>{props.logement.rating}</p>
        </div>
      </section>
      <section className="collapse">
        <DropDown title="Description" textes={[props.logement.description]} />
        <DropDown title="Équipement" textes={props.logement.equipments} />
      </section>
    </>
  )
}

export default Logement
