import React from 'react'

function Product({product, price, description}) {
    return(
        <div className='product'>
            <li className={'list'}>
                <h5>Product name: {product}</h5>
                <p>Price: ${price}</p>
                <p>Description: {description}</p>
            </li>
        </div>
    )
}
export default Product;