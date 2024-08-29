import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
function SingleProduct(props) {
const [single, setSingle] = useState([])
  const location = useLocation();
  const itemId = location.pathname.slice(9)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
            .then(res=>res.json())
            .then(json=>setSingle(json))
}, [])


  return (
    <div>
      <h1>One Product</h1>
<div className="container">
  <div className="single__product">
    <div className="single__title">{single.title}</div>
    <img src={single.image} className='product__image' />
    <div className="single__title">{single.price}</div>
  </div>
</div>
    </div>
  )
}

export default SingleProduct