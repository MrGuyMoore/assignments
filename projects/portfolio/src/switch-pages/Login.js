// React Imports
import React,{Component} from 'react'

// Button & Form Import
import {Button,FormGroup,FormControl,ControlLabel} from 'react-bootstrap'

export default class Login extends  Component{
    constructor(props){
        super(props);

        // Set state for e-mail and password
        this.state = {
            email: "",
            password: "",
        };
    }
    validateForm(){

        // Setting length for both password and email
        return this.state.email.length > 4 && this.state.password.length > 5;
    }
    handleChange = event =>{
        // Setting State
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    handleSubmit = event =>{
        event.preventDefault();
        console.log(localStorage.email)
        localStorage.setItem('email', JSON.stringify(this.state.email));
        localStorage.setItem('password', JSON.stringify(this.state.password));
    };
    render() {
        return (
            <div className={'logstyle'}>
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel> Email </ControlLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
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
                        <Button className={'button'} block bsSize="large" disabled={!this.validateForm()} type="submit">Login
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}