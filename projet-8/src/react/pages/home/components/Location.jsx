import Appartement from "./Appartement"

function Location(props) {
    const logements = props.logements.map((appart) => <Appartement logement={appart} key={appart.id}/>)
    return (
        <section className="location_section">
            <div className="location">
                {logements}
            </div>
        </section>
    )
}

export default Location