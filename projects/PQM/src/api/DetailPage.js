import React from 'react'

function MovieRow({title, poster_path, overview, id, release_date}) {
    return<table key={id}>
            <tbody>
            <tr>
                <td>
                    <img alt="poster_path" src={`http://image.tmdb.org/t/p/w342/${poster_path}`}/>

                </td>
                <td>
                    <div className={'moviealign'}> <h2>{title}</h2><br/>
                           <br/>{overview}<br/>
                        <br/><p>Release Date: </p>{release_date}</div>
                </td>
            </tr>
            </tbody>
        </table>
    }

export default MovieRow;