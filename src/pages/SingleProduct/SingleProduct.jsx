import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../../context/shopContext'
import { CiStar } from "react-icons/ci";


function SingleProduct() {
  const context = useContext(ShopContext)
  const [single, setSingle] = useState([])
  const location = useLocation();
  const itemId = location.pathname.slice(9)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then(res => res.json())
      .then(json => setSingle(json))
  }, [])


  return (
      <div className="container">
        <div className="single__product">
          <div className="single__title">{single.title}</div>
          <img src={single.image} className='product__image' />
          <div className="single__title">{single.price}$</div>
          <p>{single.description}</p>
          {single.rating?.rate}/5
         
        </div>

        <div className="grop__btn">
        <button  onClick={(id) => context.addToCart(single)} className='btn btn__add'>Add to cart</button>
        <button className='btn btn__like'>Like</button>
        </div>
      </div>
  )
}

export default SingleProduct