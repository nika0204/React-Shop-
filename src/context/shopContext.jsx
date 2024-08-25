import React, { createContext, useState, useEffect } from 'react'


export const ShopContext = createContext();
export const ShopContextProvider = ({ children }) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [])


    const [cart, setCart] = useState([]);


    const addToCart = (id) => {
        id["quant"] = 1;
        setCart([...cart, id])
    };
    console.log(cart)

    const contextValue = { product, setProduct, addToCart, cart}
    return <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>
}


export default ShopContextProvider