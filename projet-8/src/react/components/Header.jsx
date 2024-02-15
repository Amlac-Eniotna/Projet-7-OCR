import logo from '../../assets/logo.svg'
import { useState } from 'react'

function Header() {
    const [menuAcceuil, updateAcceuil] = useState(true)
    const [menuAPropos, updateAPropos] = useState(false)
    return (
        <header className='header'>
            <img src={logo} alt='logo kasa' className='header__img'/>
            <nav className='header__nav'>
                <ul className='header__nav--ul'>
                    {menuAcceuil ? <li className='menu-select'>Accueil</li> : <li onClick={() => {
                        updateAcceuil(true)
                        updateAPropos(false)
                        }}>Accueil</li>}
                    {menuAPropos ? <li className='menu-select'>À Propos</li> : <li onClick={() => {
                        updateAcceuil(false)
                        updateAPropos(true)
                        }}>À Propos</li>}
                </ul>
            </nav>
        </header>
    )
}

export default Header