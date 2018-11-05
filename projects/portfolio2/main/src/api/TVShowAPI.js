import React,{Component} from 'react'
import axios from 'axios'
import TVShowTitles from './TVShowTitles'
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

class TVShowAPI extends Component{
    constructor(props){
        super(props);
        this.state = {
            results: [],
        }
        this.handleUpload = this.handleUpload.bind(this);
        this.manageFileResponse = this.manageFileResponse.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    getTVShowAPI(url){
        return axios.get(url).then(response => response.data)
    }
    sendImage(file, inputs){
        return axiosCustom.post('/api/tvshow', {file, ...inputs})
            .then(response => response.data)
    }
    handleUpload(uploader, inputs){
        return e => {
            e.preventDefault();
            this.sendImage(uploader.current.files[0], inputs)
                .then(this.manageFileResponse)
        }
    }
    handleDelete (tvshow_id){
        return axios.delete('api/tvshow/'+ tvshow_id)
            .then(response => {
                this.setState(prevState => {
                    return {results: prevState.results.filter(result => result._id !== tvshow_id)}
                })
            })
    }
    manageFileResponse(newTVShow) {
        this.setState(prevState => ({
            results: [...prevState.results, newTVShow]
        }))
    }
    componentDidMount(){
        this.getTVShowAPI("/api/tvshow")
            .then(results => this.setState({results})
            )
    };
    render(){
        const tvshow = this.state.results;
        return(
            <div>
                <Form submit = {this.handleUpload}/>
                <TVShowTitles tvshow={tvshow}
                handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default TVShowAPI;