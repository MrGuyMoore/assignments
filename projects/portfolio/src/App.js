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
import Login from './switch-pages/Login'
import Registration from './switch-pages/Registration'

// Imported Stylesheets
import './style/index.css'
import './style/header.css'
import './style/navbar.css'
import './style/login.css'
import './style/footer.css'
import './style/sidebar.css'
import './style/main.css'
import './style/movie.css'
import './style/contact.css'
import './style/about.css'
import './style/tv.css'
import './style/registration.css'
// Main App

function App() {

    return(
        <div className={'maincontainer'}>
            <NavBar/>
            <Header/>
            <div className={'bodywrapper'}>
                <Sidebar/>
                <Footer/>
                <Switch>
                    <Route exact path='/home' component={Main}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/movie' component={Movie}/>
                    <Route path='/tvshow' component={TV}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/registration' component={Registration}/>

                </Switch>
            </div>
        </div>
    )

}

export default App;