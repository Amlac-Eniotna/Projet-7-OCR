import Banner from '../../components/Banner'
import imgBanner from '../../../assets/bannier_index.png'
import Location from './components/Locations'
import logementsJson from '../../../assets/logements.json'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Home() {
  return (
    <>
      <Header linkAPropos={false} linkAccueil={true} />
      <Banner titre="Chez vous, partout et ailleurs" img={imgBanner} />
      <Location logements={logementsJson} />
      <Footer />
    </>
  )
}

export default Home
