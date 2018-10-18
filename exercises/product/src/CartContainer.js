import React, { Component } from "react";
import products from "./products.json";

import ShoppingCart from "./ShoppingCart";
import Form from "./Form";

class CartContainer extends Component {

    constructor() {
        super();
        this.state = {
            products: products
        };
        this.addThingToCart = this.addThingToCart.bind(this);
    }

    addThingToCart(product) {
        this.setState(prevState => ({
            products: [product, ...prevState.products]
        }))
    }

    render() {
        const { products } = this.state;
        console.log(this.state.products);
        return (

            <div>
                <Form submit={product => this.addThingToCart(product)} />
                <ShoppingCart products={products} />
            </div>
        )
    }
}

export default CartContainer