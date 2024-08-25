import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'


function Cart() {
  const context = useContext(ShopContext)
  return (
    <div>
      {
        context.cart.map((item) => (
          <div className="cart-wrap">
            <div>{item.title}</div>
            <img src={item.image} className='product__image'/>
            <div>{item.price}$</div>
          </div>
        ))
      }
    </div>
  )
}

export default Cart