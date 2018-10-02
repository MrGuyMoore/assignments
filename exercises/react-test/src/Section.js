import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

function Section(props) {
    return (
        <section>
        <Sidebar menuItems={props.sidebar.menuItems}/>
            <Main title={props.main.title} blogPosts={props.main.blogPosts}/>
        </section>
    )
}
    export default Section;