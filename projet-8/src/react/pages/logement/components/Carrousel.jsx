import arrow from '../../../../assets/arrowCarrousel.svg'
import { useState } from 'react'

function Carrousel(props) {
  let [carrouselIndex, setCarrouselIndex] = useState(0)
  return (
    <section className="carrousel">
      <div className="carrousel__div">
        <img
          className="carrousel__img"
          src={props.src[carrouselIndex]}
          alt={props.title}
        />
        <div className="carrousel__arrow">
          <img
            className="carrousel__arrow--left"
            src={arrow}
            alt="arrow left"
            onClick={() => {
              setCarrouselIndex(
                carrouselIndex <= 0 ? props.src.length - 1 : carrouselIndex - 1,
              )
            }}
          />
          <img
            className="carrousel__arrow--right"
            src={arrow}
            alt="arrow right"
            onClick={() => {
              setCarrouselIndex(
                carrouselIndex >= props.src.length - 1 ? 0 : carrouselIndex + 1,
              )
            }}
          />
        </div>
        <p className="carrousel__p">
          {carrouselIndex + 1}/{props.src.length}
        </p>
      </div>
    </section>
  )
}

export default Carrousel
