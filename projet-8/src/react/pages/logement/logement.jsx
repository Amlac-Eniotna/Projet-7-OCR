import Header from '../../components/Header'
import Carrousel from './components/Carrousel'
import DropDown from '../../components/DropDown'
import starFull from '../../../assets/star-full.svg'
import starEmpty from '../../../assets/star-empty.svg'

function Logement(props) {
  let tags = props.logement.tags.map((tag) => (
    <p key={tag} className="info__tagslist--tag">
      {tag}
    </p>
  ))
  const range = [1, 2, 3, 4, 5]

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
          <div className="info__note">
            {range.map((rangeElem) =>
              props.logement.rating >= rangeElem ? (
                <img
                  key={rangeElem.toString()}
                  className="info__note--star"
                  src={starFull}
                  alt="étoile plein"
                />
              ) : (
                <img
                  key={rangeElem.toString()}
                  className="info__note--star"
                  src={starEmpty}
                  alt="étoile vide"
                />
              ),
            )}
          </div>
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
