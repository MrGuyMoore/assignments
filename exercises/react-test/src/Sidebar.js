import React from 'react'
import Menuitems from './Menuitems'

function Sidebar(props) {
    return(
        <nav>
            <Menuitems links={props.menuItems}/>
        </nav>
    )
}

export default Sidebar;