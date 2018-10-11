import React, { Component } from 'react'
import axios from 'axios';


export default class Homeworld extends Component {
    constructor(){
        super();
        this.state = {
            homeworld: null,
            loading: true,
            err: null,
        }
    }

    getHomeWorldData(url){
        return axios.get(url).then(response => response.data);
    }
    componentDidMount(url){
        this.getHomeWorldData("https://vschool-cors.herokuapp.com?url=https://swapi.co/api/planets/")
            .then(homeworld => this.setState({homeworld, loading: false}))

            ;
    }
    render() {
        const {loading, err, homeworld} = this.state;
        console.log(this.state.homeworld);
        return (
            <div>
                    {loading?
                    <div> ...Loading Home World Data</div>
                    :
                    err ?
                        <div>Sorry, your data is unavailable</div>
                        :
                        <h3>Planet Name :{homeworld.name}</h3>}
            </div>
        )
    }
}

