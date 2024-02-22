import arrow from '../../assets/arrowDropDown.svg'
import { useState } from 'react'

function DropDown(props) {
  const [open, setOpen] = useState(false)
  // inverse la valeur d'ouverture du collapse puis change le className en fonction du tru ou du false
  const whichClass = () => {
    setOpen(!open)
  }

  let texte = props.textes.map((text) => <p key={props.title + text}>{text}</p>)

  return (
    <div className={props.className}>
      <div className="dropdown">
        <h3 className="dropdown__title" onClick={whichClass}>
          {props.title}
          <img
            src={arrow}
            alt="arrow"
            className={
              open
                ? 'dropdown__title--img developpe-img'
                : 'dropdown__title--img'
            }
          />
        </h3>
        <div
          className={open ? 'dropdown__text developpe-text' : 'dropdown__text'}
        >
          <div className="dropdown__text--div">{texte}</div>
        </div>
      </div>
    </div>
  )
}

export default DropDown
