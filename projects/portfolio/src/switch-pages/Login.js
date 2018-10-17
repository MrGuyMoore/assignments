// React Imports
import React,{Component} from 'react'

// Button & Form Import
import {Button,FormGroup,FormControl,ControlLabel} from 'react-bootstrap'

export default class Login extends  Component{
    constructor(props){
        super(props);

        // Set state for e-mail and password
        this.state = {
            username: "",
            password: "",
            auth: false,
            err: false,
        };
    }
    handleChange = event =>{
        // Setting State
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    handleSubmit = event =>{
        event.preventDefault();
        if(this.state.username === localStorage.getItem('username')&& this.state.password === localStorage.getItem("password")){
            return this.props.history.push("/home")
        }else{
            this.setState({err: true})
        }
    };
    render() {
        return (
            <div className={'logstyle'}>
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="username" bsSize="large">
                            <ControlLabel> Username </ControlLabel>
                            <FormControl
                                autoFocus
                                type="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password </ControlLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <Button className={'button'} type="submit">Login
                        </Button>
                        {this.state.err ? <div>Please enter valid information</div> : null}
                    </form>
                </div>
            </div>
        );
    }
}