import logo from '../../assets/logo.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  const [menuAcceuil, updateAcceuil] = useState(props.linkAccueil)
  const [menuAPropos, updateAPropos] = useState(props.linkAPropos)
  return (
    <header className="header">
      <img src={logo} alt="logo kasa" className="header__img" />
      <nav className="header__nav">
        {menuAcceuil ? (
          <Link className="menu-select" to="/home">
            Accueil
          </Link>
        ) : (
          <Link
            to="/home"
            onClick={() => {
              updateAcceuil(true)
              updateAPropos(false)
            }}
          >
            Accueil
          </Link>
        )}
        {menuAPropos ? (
          <Link className="menu-select" to="/a-propos">
            À Propos
          </Link>
        ) : (
          <Link
            to="/a-propos"
            onClick={() => {
              updateAcceuil(false)
              updateAPropos(true)
            }}
          >
            À Propos
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
