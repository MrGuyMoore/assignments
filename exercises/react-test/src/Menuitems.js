import React from 'react'

function MenuItems(props) {
    const linkElements = props.links.map((link, i) => <li key={i}><a href="#">{link}</a></li>);
    return(
        <nav>
            <ul>
                {linkElements}
            </ul>
        </nav>
    )
}

export default MenuItems;