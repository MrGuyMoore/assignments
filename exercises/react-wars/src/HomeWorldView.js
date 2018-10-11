import React from 'react';
import {Link,Switch,Route} from 'react-router-dom'


function HomeWorldView(homeworld) {
    const linkElements = homeworld.map((homeworld, i) =>(
        <Link key={i} to{`/homeworld/${i}`}>{homeworld.name}</Link>
    ));
    return(
        <div>
            <nav>
                {linkElements}
            </nav>
            <Switch>
                <Route
                    path="/homeworld/:index"
                    render={({match:{params:{ index }}}) =>(
                        <DetailPage {...homeworld[index]} />
                        )} />
            </Switch>
        </div>
    )
}

export default HomeWorldView;