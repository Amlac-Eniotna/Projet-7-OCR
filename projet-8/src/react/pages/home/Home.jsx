import Banner from '../../components/Banner'
import imgBanner from '../../../assets/bannier_index.png'
import Location from './components/Locations'
import Header from '../../components/Header'
import { Navigate, useLocation } from 'react-router-dom'

function Home(props) {
  const location = useLocation()
  return (
    <>
      {location.pathname === '/' ? <Navigate to="/home" /> : null}
      <Header linkAPropos={false} linkAccueil={true} />
      <Banner titre="Chez vous, partout et ailleurs" img={imgBanner} />
      <Location logements={props.logements} />
    </>
  )
}

export default Home
