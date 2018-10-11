// React Imports
import React from 'react'
import {Switch, Route} from 'react-router-dom'

// Imported Pages
import Header from './main-pages/Header'
import Main from './switch-pages/Main'
import Footer from './main-pages/Footer'
import Sidebar from './main-pages/Sidebar'
import NavBar from './main-pages/NavBar'
import About from './switch-pages/About'
import Contact from './switch-pages/Contact'
import Movie from './switch-pages/Movie'
import TV from './switch-pages/TV'

// Imported Stylesheets
import './style/index.css'

// Main App

function App() {
    return(
        <div className={'maincontainer'}>
            <NavBar/>
            <Header/>
            <div className={'bodywrapper'}>
                <Main/>
                <Sidebar/>
                <Footer/>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/movie' component={Movie}/>
                    <Route path='/tv' component={TV}/>
                </Switch>
            </div>
        </div>
    )

}

export default App;