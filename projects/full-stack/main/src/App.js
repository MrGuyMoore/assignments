import React from 'react';
import {Switch, Route} from 'react-router-dom'
import TV from './switch/TVShow'
import Home from './switch/Home'
import Movie from './switch/Movie'
import NavBar from './main/NavBar'
import Footer from './main/Footer'
import './style/main.css'



function App() {
    return (
        <div className={'mainbody'}>
            <NavBar/>

            <div className={'switchpage'}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/tvshow' component={TV}/>
                    <Route path='/movie' component={Movie}/>
                </Switch>
            </div>
            <Footer/>
        </div>

    );

}
export default App;
