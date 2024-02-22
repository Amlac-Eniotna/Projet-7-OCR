function Banner(props) {
  let title = null
  // affiche le titre sur la bannière si il existe
  if (props.titre) {
    title = <h1 className="banner__h1">{props.titre}</h1>
  }

  return (
    <section className="banner_section">
      <div className="banner">
        <img src={props.img} alt="paysage" className="banner__img" />
        {title}
      </div>
    </section>
  )
}

export default Banner
