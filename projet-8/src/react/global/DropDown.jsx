import arrow from '../../assets/arrowDropDown.svg'

function DropDown(props) {
  let texte = props.textes[0]
  if (props.textes.length > 1) {
    texte = props.textes.map((text) => <p className="dropdown__text">{text}</p>)
  }
  return (
    <div className="dropdown">
      <h3 className="dropdown__title">
        {props.title}
        <img src={arrow} alt="arrow" className="dropdown__title--img" />
      </h3>
      {texte}
    </div>
  )
}

export default DropDown
