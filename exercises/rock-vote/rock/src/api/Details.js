import React from 'react'

function BlogPost({title, body, upVote, downVote, id}) {
    return (
        <div key={id}>
            <h1>{title}</h1>
            <h3>{body}</h3>
            <h6>{upVote}{downVote}</h6>
        </div>
    )
}

export default BlogPost;