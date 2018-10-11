import React from 'react'
import Product from './Product'

function Cart({products}) {
    const productComponents = products.map(product => <Product key ={product.id}{...product}/>)
    return(
        <ul>
            {productComponents}
        </ul>
    )
}

export default Cart;