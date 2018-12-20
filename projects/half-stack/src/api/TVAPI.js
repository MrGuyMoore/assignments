import React,{Component} from 'react'
import axios from 'axios'
import TvShowTitle from './TvTitle'



class TVClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }
    getTvShowAPI(url) {
        return axios.get(url).then(response => (response.data.results))
    };

    componentDidMount() {
        this.getTvShowAPI("https://api.themoviedb.org/3/tv/airing_today?api_key=5bb3b7f943eeb6b9be93ddd7b17634d8&language=en-US&page=1")
            .then(results => this.setState({results}))
    };
    render(){
        const tvshow = this.state.results;
        return(
            <div>
                <TvShowTitle tvshow={tvshow}/>
            </div>
        )
    }
}

export default TVClass;