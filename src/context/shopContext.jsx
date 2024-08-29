import React, { createContext, useState, useEffect } from 'react'
import SingleProduct from '../pages/SingleProduct/SingleProduct';


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
        // console.log(id)
        if (id.quant === 1 || id.quant > 1) {
            id.quant += 1;
        } else {
            id["quant"] = 1;
            setCart([...cart, id])
        }
    };
    // console.log(cart)

    const [quantity, setQuantity] = useState()
    const addOneToCart = (id) => {
        setQuantity(id.quant += 1)
    }
    const removeOneFromCart = (id) => {
        if (id.quant <= 1) {
            const idToRemove = id.id
            setCart(cart.filter(prod => prod.id !== idToRemove))
        } else {
            setQuantity(id.quant -= 1)

        }
    }

    const remove = (id) => {
        const idToRemove = id.id
        setCart(cart.filter(prod => prod.id !== idToRemove))
    }



    const contextValue = {
        product,
        setProduct,
        addToCart,
        cart,
        addOneToCart,
        removeOneFromCart,
        remove,
        
    }
    return <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>
}


export default ShopContextProvider