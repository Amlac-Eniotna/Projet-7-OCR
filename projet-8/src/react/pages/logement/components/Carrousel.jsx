import arrow from '../../../../assets/arrowCarrousel.svg'

function Carrousel(props) {
  return (
    <section className="carrousel">
      <div className="carrousel__div">
        <img className="carrousel__img" src={props.src[0]} alt={props.title} />
        <div className="carrousel__arrow">
          <img
            className="carrousel__arrow--left"
            src={arrow}
            alt="arrow left"
          />
          <img
            className="carrousel__arrow--right"
            src={arrow}
            alt="arrow right"
          />
        </div>
        <p className="carrousel__p">1/4</p>
      </div>
    </section>
  )
}

export default Carrousel
