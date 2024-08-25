import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'


function Product(props) {
    const item = props.item
 const context = useContext(ShopContext)

    return (
        <>
            <li  className='product'>
                <img src={item.image} className='product__image' />
                <div className="product__title">{item.title}</div>
                <div className="product__price">${item.price}</div>
                <p className="product__description">{item.description}</p>
                <div className="grop__btn">
                    <button onClick={(id) =>  context.addToCart(item)}  className='btn btn__add'>Add to cart</button>
                    <button className='btn btn__like'>Like</button>
                </div>
            </li>
        </>
    )
}

export default Product