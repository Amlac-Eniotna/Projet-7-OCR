import Header from '../../components/Header'
import Banner from '../../components/Banner'
import imgBanner from '../../../assets/bannier_a_propos.png'
import DropDown from '../../components/DropDown'

let texts = [
  {
    title: 'Fiabilité',
    textes: [
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    ],
  },
  {
    title: 'Respect',
    textes: [
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    ],
  },
  {
    title: 'Service',
    textes: [
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    ],
  },
  {
    title: 'Sécurité',
    textes: [
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    ],
  },
]

let drop = texts.map((text) => (
  <DropDown
    key={text.title}
    title={text.title}
    textes={text.textes}
    className="dropdown__container--apropos"
  />
))

function Apropos() {
  return (
    <>
      <Header linkAPropos={true} linkAccueil={false} />
      <Banner img={imgBanner} />
      {drop}
    </>
  )
}

export default Apropos
