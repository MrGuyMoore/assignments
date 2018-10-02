import React from 'react'

function BlogPosts(props) {
    const postElements = props.blogPosts.map((post, i)=>(
        <div key={i}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <hr/>
        </div>
    ));
    return(
        <div>
            {postElements}
        </div>

    )
}

export default BlogPosts;