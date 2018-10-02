import React,{Component} from "react";

class Likes extends Component{
    constructor(){
        super();
        this.state={
            likes: 0
        };
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
        this.zeroVote = this.Vote.bind(this);
    }
    upVote(){
        this.setState(prevState => ({
            likes: prevState.likes + 1
        }))
    }
    downVote(){
        this.setState(prevState => ({
            likes: prevState.likes - 1
        }))
    }
    zeroVote(){
        this.setState(prevState => ({
            likes: 0
        }))
    }
    render(){
        const {likes} = this.state;
        return(
            <div>
                <button onClick={this.upVote}>Like</button>
                <button onClick={this.downVote}>Dis Like</button>
                <button onClick={this.zeroVote}>Zero Likes</button>
                <p><span>{likes}</span></p>
            </div>
        )
    }
}

export default Likes;