import React from 'react'

function DetailPage({ name, birth_year, eye_color, gender, hair_color, homeworld }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Born: {birth_year}</p>
            <p>Gender: {gender}</p>
            <p>Eye Color: {eye_color}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Home World Location :{homeworld.name}</p>
        </div>
    )
}

export default DetailPage
