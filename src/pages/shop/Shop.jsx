import React, { useEffect, useState, useContext } from 'react'
import Product from './Product'
import { ShopContext } from '../../context/shopContext'


function Shop() {

   const context = useContext(ShopContext)

    return (
        <>
            <div className="container">
                <ul className="list__products">
                    {context.product.map((item) => (
                        <Product item={item} key={item.id}/>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default Shop