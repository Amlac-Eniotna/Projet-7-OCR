import Banner from '../../components/Banner'
import imgBanner from '../../../assets/bannier_index.png'
import Location from './components/Locations'
import Header from '../../components/Header'
import { Navigate, useLocation } from 'react-router-dom'
import NoServer from '../../components/504'

function Home(props) {
  const location = useLocation()
  return (
    <>
      {location.pathname === '/' ? <Navigate to="/home" /> : null}
      <Header linkAPropos={false} linkAccueil={true} />
      {/* si aucun logement n'est disponible alors affiche l'erreur 504 (classeName similaire à la page 404)*/}
      {props.logements.length === 0 ? (
        <section className="erreur-404">
          <NoServer />
        </section>
      ) : (
        <>
          <Banner titre="Chez vous, partout et ailleurs" img={imgBanner} />
          <Location logements={props.logements} />
        </>
      )}
    </>
  )
}

export default Home
