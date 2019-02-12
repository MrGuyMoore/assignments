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
        this.getTvShowAPI("https://api.themoviedb.org/3/discover/tv?api_key=5bb3b7f943eeb6b9be93ddd7b17634d8&" +
            "language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")
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