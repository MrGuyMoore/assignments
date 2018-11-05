import React from 'react'
import {Switch,Link,Route} from 'react-router-dom'
import DetailInformation from './DetailPageTVShow'

function TVShowTitles({tvshow, handleDelete}) {
    const src = '/api/tvshow/img/';
    const linkElements = tvshow.map((tvshow) =>(
        <div className={'linkimg'}>
            <Link className={'tvshow'} to={`/tvshow/${tvshow._id}`}>
                <div className={'imgstyle'}> <img alt="filename" src={`${src}${tvshow.filename}`} width={360}/></div>
                <div className={'title'}>{tvshow.title}</div>
            </Link>
            <button onClick={()=>handleDelete(tvshow._id)}
                    style={{color: 'red',}}>x</button>
        </div>
    ));
    return(
        <div>
            <Switch>
                <Route exact path={'/tvshow'} render={()=>(
                <nav>
                    {linkElements}
                </nav>
                )}/>
                <Route
                    path='/tvshow/:id'
                    render={({match: {params: {id}}})=>(
                        <DetailInformation {...tvshow.find(tvshow => id === tvshow._id)}/>
                    )}/>
            </Switch>
        </div>
    )
}

export default TVShowTitles;
