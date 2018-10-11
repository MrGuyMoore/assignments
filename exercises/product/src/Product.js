import React from "react";

function Product({ product, price, description, budget }) {
    return (
        <div className='product'>
        <li>
            <h5>Product name: {product}</h5>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
        </li>
            <h2>Budget: {budget} </h2>
        </div>
    )
}

export default Product;