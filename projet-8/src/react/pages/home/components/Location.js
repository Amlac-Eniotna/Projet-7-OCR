function Location(props) {
    let logements = props.logements
    console.log(logements)
    return (
        <section className="location_section">
            <div className="location">
                <article className="location__article">
                    <img alt="location" className="location__article--img" />
                    <h2 className="location__article--h2">Titre de la location</h2>
                </article>
                <article className="location__article">
                    <img alt="location" className="location__article--img" />
                    <h2 className="location__article--h2">Titre de la location</h2>
                </article>
                <article className="location__article">
                    <img alt="location" className="location__article--img" />
                    <h2 className="location__article--h2">Titre de la location</h2>
                </article>
            </div>
        </section>
    )
}

export default Location