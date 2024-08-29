import React, { createContext, useState, useEffect } from 'react'
import SingleProduct from '../pages/singleProduct/singleProduct';


export const ShopContext = createContext();
export const ShopContextProvider = ({ children }) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [])
    const [cart, setCart] = useState([]);


    

    const addToCart = (product) => {
        setCart(prevCart => {
          const existingProductIndex = prevCart.findIndex(prod => prod.id === product.id);
    console.log(existingProductIndex)
          if (existingProductIndex !== -1) {
            const updatedCart = [...prevCart];
            updatedCart[existingProductIndex].quant += 1;
            return updatedCart;
          } else {
            return [...prevCart, { ...product, quant: 1 }];
          }
        });
      };
      
    // console.log(cart)

    const [quantity, setQuantity] = useState()
    const addOneToCart = (id) => {
        setQuantity(id.quant += 1)
    }
    const removeOneFromCart = (id) => {
        if (id.quant <= 1) {
            const idToRemove = id.id
            setCart(cart.filter(prod => prod.id !== idToRemove)) //need to rewrite
        } else {
            setQuantity(id.quant -= 1)

        }
    }

    const remove = (id) => {
        const idToRemove = id.id
        setCart(cart.filter(prod => prod.id !== idToRemove))
        console.log(cart.filter(prod => prod.id !== idToRemove))

    }

    console.log(cart)

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