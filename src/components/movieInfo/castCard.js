import React from "react"

const CastCard = (props) => {
    const { person } = props

    return (
        <div className="col">
            <img src={person.profilePath} alt={person.name} />
            <h3>Character Name: {" "}{person.character}</h3>
            <p className="grey-text">Actor Name: {" "}{person.name}</p>
        </div>
    )
}

export default CastCard