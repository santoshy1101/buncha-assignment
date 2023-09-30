import React from 'react'
import "./navbar.css";
import { FaFileCsv,FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
const Navbar = () => {
  const cartItems = useSelector(state => state.cart);

  return (
    <div className='navbar'>
    <h4>E-commerce</h4>
    <div className='nav_logos'>
    
    <span><FaFileCsv size={20}/> <p>share Logs</p></span>
    <span><FaShoppingCart size={20}/> <p>{cartItems.length}</p></span>
    </div>
    </div>
  )
}

export default Navbar