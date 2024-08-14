import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
function Header() {
    return (
        <div className='header'>
            <div className="header__links">
                <Link to='/'>Shop</Link>
                <Link to='/cart'><FiShoppingCart size={30}/></Link>
            </div>
        </div>
    )
}

export default Header