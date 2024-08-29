import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'
import { MdDeleteOutline } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


function Cart() {
  const context = useContext(ShopContext)
  return (
    <div>
      {
        context.cart.map((item) => (
          <div className="container">
            <div key={item.id} className="cart__wrap">
              <div>{item.title}</div>
              <img src={item.image} className='product__image' />
              <div>{item.price}$</div>
              <div className="cart__btn-wrap">
                <button onClick={(id) => context.removeOneFromCart(item)}><CiCircleMinus size={28}/></button>
                <p className="item__quant">{item.quant}</p>
                <button onClick={(id) => context.addOneToCart(item)}><CiCirclePlus size={28}/></button>
                <button onClick={(id) => context.remove(item)}><MdDeleteOutline size={28}/></button>
              </div>
            </div>
          </div>

        ))
      }
    </div>
  )
}

export default Cart