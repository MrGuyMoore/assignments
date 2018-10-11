import React from 'react'
import About from './About'
import Service from './Service'
import Home from './Home'
import Contact from './Contact'
import './style/style.css'
import {Link, Switch, Route} from 'react-router-dom'


function App() {
    return(
        <div className={'bodywrapper'}>
            <header className={'header'}>
                <h1>Mario's Plumbing Services</h1>
                <nav className={'navbar'}>
                    <p>|</p><Link to="/">Home</Link><p>|</p>
                    <Link to="/service">Service</Link><p>|</p>
                    <Link to="/about">About</Link><p>|</p>
                    <Link to='/contact'>Contact Us</Link><p>|</p>
                </nav>
            </header>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/service' component={Service}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
            <footer className={'footer'}>
                Copyright ©2018 created by Guy P. Moore Jr.
            </footer>
        </div>
    )
}



export default App;