import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './sass/index.sass'
import Home from './react/pages/home/Home'
import Apropos from './react/pages/a_propos/Apropos'
import Logement from './react/pages/logement/Logement'
import NotFound from './react/pages/404/404'
import Footer from './react/components/Footer'
import logementsJson from './assets/logements.json'

const apparts = logementsJson.map((appart) => (
  <Route
    key={appart.id}
    path={'/logement/' + appart.id}
    element={<Logement logement={appart} />}
  />
))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home logements={logementsJson} />} />
        <Route path="/home" element={<Home logements={logementsJson} />} />
        <Route path="/a-propos" element={<Apropos />} />
        {apparts}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
