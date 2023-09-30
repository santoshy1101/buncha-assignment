import React, { useState } from 'react'
import ScrollSync from '../sync/ScrollSync'
import { products } from '../../assets/data'
import './Category.css'

function Category() {
  const initialCategories = [
    'Home Decor',
    'Sports',
    'Electronics',
    'Beauty',
    'Clothing',
  ]

  return (
    <div className="category">
      <ScrollSync categories={initialCategories} products={products} />
      {/* Other components and content */}
    </div>
  )
}

export default Category
