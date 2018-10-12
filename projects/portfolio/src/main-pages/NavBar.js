// React Imports
import React from 'react'
import {Link} from 'react-router-dom'
import Login from "../switch-pages/Login";

function NavBar() {
    return(
        <div className={'navbarhome'}>
            <div className={'logo'}>
                <head>PQM</head>
            </div>
            <div className={'navbar'}>
                <Link to={"/movie"}>Movies</Link>
                <Link to={"/tv"}>T.V. Shows</Link>
                </div>
            <div className={'navbar2'}>
                <Link to={'/login'}>Login In</Link>
                <Link to={'/registration'}>Register New Account</Link>
                <Link to={"/contact"}>Contact Us</Link>
                <Link to={"/about"}>About Us</Link>
                <Link to={"/"}>Home</Link>



            </div>
        </div>
    )
}

export default NavBar;