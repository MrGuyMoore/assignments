import React, {Component} from 'react'
import axios from 'axios'

import BlogPost from './Details'


class PostClass extends Component{
    constructor(props){
        super(props);
        this.state={
            results: [],
        }
    }
    getPostAPI(url){
        return axios.get(url).then(response => (response.data))
    }
    componentDidMount(){
        this.getPostAPI("/api/post")
        .then(results => this.setState({results}))
    }
    render(){
        const post = this.state.results;

        return(
            <div>
                <BlogPost post={post}/>
            </div>
        )
    }

}



export default PostClass;