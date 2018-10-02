import React from 'react'
import BlogPosts from './BlogPosts'


function Main(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <BlogPosts blogPosts={props.blogPosts}/>
        </div>
    )
}

export default Main;