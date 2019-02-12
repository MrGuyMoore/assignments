import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import TVShowRow from './TvDetail'



function TvShowTitle({tvshow}) {
    const baseUrl = `http://image.tmdb.org/t/p/w185/`;

    const linkElements = tvshow.map((tvshow) =>(
        <Link key={tvshow.id} to={`/tvshow/${tvshow.id}`}>
            <div className={'tvtitle'}><div className={'tvimg'}> <img src={baseUrl+tvshow.poster_path} alt={'posters'}/><br/></div>
                <br/><div className={'tvlink'}> {tvshow.name}</div>
            </div>
        </Link>
    ));
    return(
        <div>
            <Switch>
                <Route exact path={'/tvshow'} render={() =>(
                    <nav>
                        {linkElements}
                    </nav>
                )}/>
                <Route
                    path='/tvshow/:id'
                    render={({match: { params: {id}}}) =>(
                        // eslint-disable-next-line
                        <TVShowRow {...tvshow.find(tvshow => id == tvshow.id)}/>
                    )}/>
            </Switch>
        </div>
    )
}

export default TvShowTitle;