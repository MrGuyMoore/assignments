// React Imports
import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <div className={'navbarhome'}>
            <div className={'logo'}>
                <div className={'navhead'}>PQM</div>
            </div>
            <div className={'navbar'}>
                <Link to={"/movie"}>Movies</Link>
                <Link to={"/tvshow"}>T.V. Shows</Link>
                </div>
            <div className={'navbar2'}>
                <Link to={'/login'}>Log In</Link>
                <Link to={'/registration'}>Register New Account</Link>
                <Link to={"/home"}>Home</Link>



            </div>
        </div>
    )
}

export default NavBar;