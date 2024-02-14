import logo from '../../assets/logo.svg'

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='logo kasa' className='header__img'/>
            <nav className='header__nav'>
                <ul className='header__nav--ul'>
                    <li>Accueil</li>
                    <li>À Propos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header