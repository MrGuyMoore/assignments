import React,{Component} from 'react'
import axios from 'axios'
import MovieTitle from './MovieTitles'


class MovieClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }
   getMovieAPI(url) {
        return axios.get(url).then(response => (response.data.results))
    };

    componentDidMount() {
        this.getMovieAPI("https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language" +
            "=en-US&api_key=5bb3b7f943eeb6b9be93ddd7b17634d8")
            .then(results => this.setState({results}))
    };
    render(){
        const movies = this.state.results;
        return(
            <div>
                <MovieTitle movies={movies}/>
            </div>
        )
    }
}


export default MovieClass;

