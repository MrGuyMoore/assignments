import React from 'react'

import {Link, Switch, Route} from 'react-router-dom'
import MovieRow from './DetailPage'

function MoviesTitle({movies}) {

    const baseUrl = "http://image.tmdb.org/t/p/w185/";
    const linkElements = movies.map((movie) =>(
        <Link className={'movelink'} key={movie.id} to={`/movie/${movie.id}`}>
          <div className={'movietitle'}>  <div className='movieimg'><img src={baseUrl+movie.poster_path} alt={'posters'}/>
          </div>
            <div className={'linkimg'}> {movie.title}</div>
        </div>
        </Link>
    ));
    return(
        <div>
            <Switch>
                <Route exact path={'/movie'} render={() =>(
                    <nav>
                        {linkElements}
                    </nav>
                )}/>
                <Route
                    path='/movie/:id'
                    render={({match: { params: {id}}}) =>(
                        // eslint-disable-next-line
                        <MovieRow {...movies.find(movie => id == movie.id)}/>
                        )}/>
            </Switch>
        </div>
    )
}

export default MoviesTitle;