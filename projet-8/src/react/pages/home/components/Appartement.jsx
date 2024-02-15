function Appartement(props) {
    let logement = props.logement
    return (
        <article className="location__article">
            <img src={logement.cover} alt={logement.title} className="location__article--img" />
            <div className="location__article--shadow-overlay">
                <h2 className="location__article--h2">{logement.title}</h2>
            </div>
        </article>
    )
}

export default Appartement