import React, { createContext, useState, useEffect } from 'react'


export const ShopContext = createContext();
export const ShopContextProvider = ({ children }) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [])


    const [cart, setCart] = useState();


    const addToCart = (id) => {
console.log(id.target.id)
    };

    const contextValue = { product, setProduct, addToCart }
    return <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>
}


export default ShopContextProvider