import { Link } from 'react-router-dom'
import Header from '../../components/Header'

function NotFound() {
  return (
    <>
      <Header />
      <section className="erreur-404">
        <h1 className="erreur-404__h1">404</h1>
        <h2 className="erreur-404__h2">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/home" className="erreur-404__a">
          Retourner sur la page d’accueil
        </Link>
      </section>
    </>
  )
}

export default NotFound
