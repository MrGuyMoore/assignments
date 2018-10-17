import React from 'react'
import 'react'


function Sidebar() {
    return(
        <div className={'sidebar'}>

            <form id='shrink'>
                <input style={{
                   fontSize: 25,
                   display: 'block',
                    width: '100%',
                    paddingBottom: 8,
                    paddingLeft: 8,
                }} type='search' placeholder='Search'/>
            </form>
        </div>
    )
}

export default Sidebar;