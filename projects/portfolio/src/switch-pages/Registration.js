// React Imports
import React,{Component} from 'react'


// Button & Form Import
import {Button,FormGroup,FormControl,ControlLabel} from 'react-bootstrap'


export default class Registration extends  Component{
    constructor(props){
        super(props);

        // Set state for e-mail, password, first, last name
        this.state = {
            username: "",
            password: "",
            fname: "",
            lname: "",
            err: false,
        };
    }
    validateForm(){

        // Setting length for both password, email, first name and last name
        return this.state.username.length >= 3 && this.state.password.length >= 6 && this.state.fname.length > 0 && this.state.lname.length > 0;
    }
    handleChange = event =>{
        // Setting State
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    handleSubmit = event =>{
        event.preventDefault();
        // Saving user informaiton to local storage
        localStorage.setItem('username', (this.state.username));
        localStorage.setItem('password', (this.state.password));
        localStorage.setItem('fname', (this.state.fname));
        localStorage.setItem('lname', (this.state.lname));
        if(this.state.password.length >= 3 && this.state.username.length >= 3){
           return this.props.history.push("/login")
        }else{
            this.setState({err: true})
        }
    };
    render() {
        return (
            <div className={'regstyle'}>
                <div className="Registration">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="fname" bsSize="large">
                            <ControlLabel> First Name : </ControlLabel>
                            <FormControl
                                autoFocus
                                type="fname"
                                value={this.state.fname}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                            <FormGroup controlId="lname" bsSize="large">
                                <ControlLabel> Last Name : </ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="lname"
                                    value={this.state.lname}
                                    onChange={this.handleChange}
                                />
                        </FormGroup>
                        <FormGroup controlId="username" bsSize="large">
                            <ControlLabel> Username : </ControlLabel>
                            <FormControl
                                autoFocus
                                type="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password : </ControlLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"/>
                        </FormGroup>
                        <Button className={'button'} block bsSize="large" disabled={!this.validateForm()} type="submit">Register
                        </Button>
                        {this.state.err ? <div>Please enter valid information</div> : null}

                    </form>
                </div>
            </div>
        );
    }
}