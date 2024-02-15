import Banner from '../../components/Banner'
import imgBanner from '../../../assets/bannier_index.png'
import Location from './components/Location';

function Home(props) {
  return (
    <>
      <Banner titre="Chez vous, partout et ailleurs" img={imgBanner}/>
      <Location logements={props.logements}/>
    </>
  )
}

export default Home;