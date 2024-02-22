import { Link } from 'react-router-dom'

function Appartement(props) {
  let logement = props.logement
  return (
    // redirige vers la page correspondante à la carte
    <Link to={'/logement/' + logement.id}>
      <article className="location__article">
        <img
          src={logement.cover}
          alt={logement.title}
          className="location__article--img"
        />
        <div className="location__article--shadow-overlay">
          <h2 className="location__article--h2">{logement.title}</h2>
        </div>
      </article>
    </Link>
  )
}

export default Appartement
