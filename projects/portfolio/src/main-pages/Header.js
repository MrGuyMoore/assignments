import React from 'react'
import {withRouter} from 'react-router-dom'


function Header(props) {
let banner = '';
    if(props.location.pathname === "/movie"){
        banner = "Recently Released"
    }else if(props.location.pathname === "/tvshow"){
        banner = "Recently Aired"
    }else if(props.location.pathname === "/home"){
        banner = "Welcome to PQM!"
    }else if(props.location.pathname === '/about'){
        banner = "Learn more about us!"
    }else if(props.location.pathname === '/contact'){
        banner = "Learn how to reach us!"
    }else if (props.location.pathname === '/registration'){
        banner = "Please Register Here!"
     }else if(props.location.pathname === '/login'){
        banner = "Please Log In"}

    return(
        <div className={'header'}>
            <h1>{banner}</h1>
        </div>
    )
}


export default withRouter(Header);