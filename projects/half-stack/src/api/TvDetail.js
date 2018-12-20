import React from 'react'

function TVShowRow({name, poster_path, overview, id, first_air_date}) {
    return <table key={id}>
        <tbody>
        <tr>
            <td>
                <img alt="poster_path" src={`http://image.tmdb.org/t/p/w185/${poster_path}`}/>
            </td>
            <td>
                <div className={'tvalign'}> <h2>{name}</h2><br/>
                    <br/>{overview}<br/>
                    <br/><p>Release Date: </p>{first_air_date}
                </div>
            </td>
        </tr>
        </tbody>
    </table>
}

export default TVShowRow;