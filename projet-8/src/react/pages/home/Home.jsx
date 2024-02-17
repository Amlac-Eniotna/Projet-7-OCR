import Banner from '../../components/Banner'
import imgBanner from '../../../assets/bannier_index.png'
import Location from './components/Locations'
import Header from '../../components/Header'

function Home(props) {
  return (
    <>
      <Header linkAPropos={false} linkAccueil={true} />
      <Banner titre="Chez vous, partout et ailleurs" img={imgBanner} />
      <Location logements={props.logements} />
    </>
  )
}

export default Home
