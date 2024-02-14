import logementsJson from '../assets/logements.json'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <Header />
      <Home logements={logementsJson}/>
      <Footer />
    </>
  )
}

export default App;