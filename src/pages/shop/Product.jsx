import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/shopContext'
import { useNavigate } from 'react-router-dom';



function Product(props) {
    const item = props.item
    const context = useContext(ShopContext)
    const navigate = useNavigate();


    const handleProductClick = (item) => {
       navigate(`/product/${item.id}`)
    };

    return (
        <>
            <li className='product' item={item} >
                <img src={item.image} className='product__image'  onClick={() => handleProductClick(item)}/>
                <div className="product__title"  onClick={() => handleProductClick(item)}>{item.title}</div>
                <div className="product__price">${item.price}</div>
                <p className="product__description">{item.description}</p>
                <div className="grop__btn">
                    <button onClick={(id) => context.addToCart(item)} item={item} className='btn btn__add'>Add to cart</button>
                    <button className='btn btn__like'>Like</button>
                </div>
            </li>
        </>
    )
}

export default Product