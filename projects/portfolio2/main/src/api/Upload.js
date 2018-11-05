import React,{Component,createRef} from 'react'

export default class Form extends Component{
    constructor(props){
        super(props);
        this.uploader = createRef()
        this.state = {
            overview: '',
            title: '',
            release_date: '',
            videoUrl: '',
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange({target:{name,value}}){
        this.setState({[name]:value})
    }
    render(){
        const {overview, title, release_date, videoUrl} = this.state;
        return(
            <form onSubmit={this.props.submit(this.uploader,this.state)}>
                <input onChange={this.handleChange}value={title}name ='title' type ='text' placeholder ='Title of Video'/>
                <input onChange={this.handleChange}value={overview}name ='overview' type ='text' placeholder ='Overview of title'/>
                <input onChange={this.handleChange}value={release_date}name ='release_date' type ='text' placeholder ='Release Date'/>
                <input onChange={this.handleChange}value={videoUrl}name ='videoUrl' type ='text' placeholder ='Youtube Video URL'/>
                <input name ='file' ref={this.uploader} type ='file' placeholder ='.JPG only please'/>
                <button>Upload</button>
            </form>
        )
    }
}