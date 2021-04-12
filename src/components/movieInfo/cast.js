import React from "react"
import CastCard from "./castCard"

const Cast = props => {
    const { people } = props

    return (
        <div>
            <div className="row">
                <h1>Cast</h1>
            </div>
            <div className="grid">
                {
                    people.map(person => <CastCard key={person.order} person={person} />)
                }
            </div>
        </div>
    )
}

export default Cast