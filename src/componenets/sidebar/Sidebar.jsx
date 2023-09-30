import React from 'react'
import './Sidebar.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, addToCart } from '../../redux/cartSlice'
const Sidebar = ({ products, categorie, selectedCategory }) => {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  // console.log(cartItems.length)
  return (
    <div className="sidebar">
      <h3>{categorie}</h3>
      <ul className="products">
        {products.map((product) => (
          <li
            className={selectedCategory === categorie ? 'selected' : ''}
            key={product.product_id}
          >
            <div>
              <img
                src={`https://picsum.photos/id/${product.product_id}/150/150`}
                alt=""
              />
              {/* <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/150/150`} alt="" /> */}
              <h4>{product.product_name}</h4>
              <p>Price: ${product.product_price.toFixed(2)}</p>
              <div className="buttons">
                {cartItems.length > 0 &&
                cartItems.find(
                  (item) => item.product_id === product.product_id,
                ) ? (
                  <button onClick={() => dispatch(removeFromCart(product))}>
                    -
                  </button>
                ) : (
                  <button onClick={() => dispatch(addToCart(product))}>
                    +
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
