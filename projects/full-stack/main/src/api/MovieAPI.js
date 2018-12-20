import React,{Component} from 'react'
import axios from 'axios'
import MovieTitles from './MovieTitles'
import Form from './Upload'

const axiosCustom = axios.create({
    transformRequest: [data => {
        const formData = new FormData()
        for (let key in data){
            if(data.hasOwnProperty(key))
            formData.append(key, data[key])
        }
        return formData;
    }]
})

class MovieAPI extends Component{
    constructor(props){
        super(props);
        this.state = {
            results: [],
        };
        this.handleUpload = this.handleUpload.bind(this);
        this.manageFileResponse = this.manageFileResponse.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    getMovieAPI(url){
        return axios.get(url).then(response => response.data)
    }

    sendImage(file, inputs){
        return axiosCustom.post('/api/movie', {file, ...inputs})
            .then(response => response.data)
    }
    handleUpload(uploader, inputs){
        return e => {
            e.preventDefault();
            this.sendImage(uploader.current.files[0], inputs)
                .then(this.manageFileResponse)
        }
    }
    handleDelete (movie_id){
        return axios.delete('api/movie/'+ movie_id)
            .then(response => {
                this.setState(prevState => {
                    return {results: prevState.results.filter(result => result._id !== movie_id)}
                })
            })
    }
    manageFileResponse(newMovie) {
        this.setState(prevState => ({
            results: [...prevState.results, newMovie]
        }))
    }
    componentDidMount(){
        this.getMovieAPI("/api/movie")
            .then(results => this.setState({results})
            )
    };
    render(){
        const movie = this.state.results;
        return(
            <div>
                <Form submit = {this.handleUpload}/>
                <MovieTitles movie={movie}
                handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default MovieAPI;