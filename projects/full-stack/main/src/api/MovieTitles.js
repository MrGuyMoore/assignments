import {Link, Route, Switch} from "react-router-dom";
import DetailInformation from "./DetailPageMovie";
import React from "react";



function MovieTitles({movie, handleDelete}) {
    const src = '/api/movie/img/';
    const linkElements = movie.map((movie) =>(
        <div className={'linkimg'}>
        <Link className={'movie'} to={`/movie/${movie._id}`}>
            <div className={'imgstyle'}> <img alt="filename" src={`${src}${movie.filename}`} width={360}/></div>
              <div className={'title'}>{movie.title}</div>
        </Link>
        <button onClick={()=>handleDelete(movie._id)}
        style={{color: 'red',}}>x</button>
        </div>
    ));
    return(
        <div>
            <Switch>
                <Route exact path={'/movie'} render={()=>(
                    <nav>
                        {linkElements}
                    </nav>
                )}/>
                <Route
                    path='/movie/:id'
                    render={({match: {params: {id}}})=>(
                        <DetailInformation {...movie.find(movie => id === movie._id)}/>
                    )}/>
            </Switch>
        </div>
    )
}

export default MovieTitles;
