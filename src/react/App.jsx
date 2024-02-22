import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Apropos from './pages/a_propos/Apropos'
import Logement from './pages/logement/Logement'
import NotFound from './pages/404/404'
import Footer from './components/Footer'

// test si le fichier json est disponible
let logementsJson
try {
  logementsJson = require('../assets/logements.json')
} catch (e) {
  logementsJson = []
}

function App() {
  // génère des routes pour chaque appartement disponible
  const apparts = logementsJson.map((appart) => (
    <Route
      key={appart.id}
      path={'/logement/' + appart.id}
      element={<Logement logement={appart} />}
    />
  ))

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home logements={logementsJson} />} />
          <Route path="/home" element={<Home logements={logementsJson} />} />
          <Route path="/a-propos" element={<Apropos />} />
          {apparts}
          {/* redirige vers la page 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
