import React from 'react'
import './CategoryPanel.css'
import { FaHome } from 'react-icons/fa'
import { MdSportsMartialArts } from 'react-icons/md'
import { FcElectronics } from 'react-icons/fc'
import { BiHappyBeaming } from 'react-icons/bi'
import { GiClothes } from 'react-icons/gi'

const CategoryPanel = ({ categories, onCategorySelect }) => {
  const cat = [
    {
      name: 'Home Decor',
      logo: <FaHome size={20}/>,
    },
    {
      name: 'Sports',
      logo: <MdSportsMartialArts size={20}/>,
    },
    {
      name: 'Electronics',
      logo: <FcElectronics size={20} />,
    },
    {
      name: 'Beauty',
      logo: <BiHappyBeaming size={20} />,
    },
    {
      name: 'Clothing',
      logo: <GiClothes  size={20}/>,
    },
    ,
  ]
  return (
    <>
      <div className="category-panel">
        <div className="vertical">
          <h3>Categories</h3>
          <ul className="categorie_sidebar">
            {categories.map((category, index) => (
              <li key={index} onClick={() => onCategorySelect(category)}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="horizontal">
        <ul className="horizontal_sidebar">
          {cat.map((item, index) => (
            <li key={index} onClick={() => onCategorySelect(item.name)}>
             <p> {item.name}</p>
              <span>{item.logo}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CategoryPanel
