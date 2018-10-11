import React from 'react'
import products from "./products.json";
import Cart from './Cart'

function Service() {
   return(
       <div>
        <Cart products={products}/>
    </div>
   )
}

export default Service;