import Form from "./Form";
import React, {Component} from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            name: []
        }
        this.addName = this.addName.bind(this);
    }

    addName(name){
        this.setState(prevState => ({
            name: [name,...prevState.name]
        }))
    }


    render(){
        let names = this.state.name.map(function(name ,i){
            return (
                <li key={i}>{name}</li>
            )
        })
        return(
            <div>
                <Form submit={inputs => this.addName(inputs.name)} />
                <ol>{names}</ol>
            </div>
        )
    }
}

export default App;