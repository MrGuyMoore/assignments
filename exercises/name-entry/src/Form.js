import React, {Component} from 'react';



class Form extends Component {

    constructor(){
        super()
        this.state = {
            name: "",
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }


    handleChange(event){
        const{target,name} = event;
        this.setState({
            [target.name]:target.value,
        })

    }

    handleSubmit(event){
        event.preventDefault();
        this.props.submit(this.state)
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>{this.state.name}</h1>
                <label>Name:</label>
                <input name="name"onChange={this.handleChange}value={this.state.name}/>
                <br/>
                <button> Add to List </button>
            </form>

        )
    }

}


export default Form;