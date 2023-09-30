import React, { useState, useEffect } from 'react'
import CategoryPanel from '../category/CategoryPanel'
import Sidebar from '../sidebar/Sidebar'
import './ScrollSync.css'

const ScrollSync = ({ categories, products }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    // Calculate the category based on scroll position
    const categoryHeight = 100 // Adjust this value as needed
    const categoryIndex = Math.floor(scrollPosition / categoryHeight)

    if (categoryIndex >= 0 && categoryIndex < categories.length) {
      setSelectedCategory(categories[categoryIndex])
    }
  }, [scrollPosition, categories])

  const handleCategorySelect = (category) => {
    // Update the selected category when a category panel item is clicked
    setSelectedCategory(category)

    // Scroll to the corresponding position in the content area
    const categoryIndex = categories.indexOf(category)
    const categoryHeight = 350 // Adjust this value to match your category panel item height

    if (categoryIndex !== -1) {
      const scrollToY = categoryIndex * categoryHeight
      window.scrollTo({ top: scrollToY, behavior: 'smooth' })
    }
  }

  return (
    <div className="scroll-sync">
      <CategoryPanel
        categories={categories}
        onCategorySelect={handleCategorySelect}
      />

      <div className="product_sidebar">
        {categories.map((categorie, index) => {
          return (
            <Sidebar
              key={index}
              products={products.filter(
                (product) => product.product_category === categorie,
              )}
              categorie={categorie}
              selectedCategory={selectedCategory}
            />
          )
        })}
      </div>

      {/* Render your content here */}
    </div>
  )
}

export default ScrollSync
