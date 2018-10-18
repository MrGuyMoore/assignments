import React, { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            price: "",
            description: "",
            product: "",
            id: "",
            budget: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.deleteProduct = this.deleteProduct.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.submit(this.state);
    }

    render() {
        const { price, description, product, id, budget} = this.state;
        return (
            <div className='wrapper'>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Product:</label>
                <input onChange={this.handleChange}name="product"value={product} type="text" />
                <label htmlFor="">Price:</label>
                <input onChange={this.handleChange}name="price"value={price} type="number" />
                <label htmlFor="">Description:</label>
                <input name="description"onChange={this.handleChange}value={description} type="text" />
                <label htmlFor="">Id:</label>
                <input name="id"onChange={this.handleChange}value={id} type="text" />
                <label htmlFor=''>Budget:</label>
                <input onChange={this.handleChange}name='budget'value={budget} type='number'/>
                <button>Add Product</button>
            </form>
                </div>
        )
    }
}

export default Form;
