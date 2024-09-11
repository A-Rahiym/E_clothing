import React from 'react'
import './CategoryItem.scss'
const CategoryItem = ({category}) => {
  console.log(category.imageUrl)
  return (
    <div className='category-container'>
      <div className='background-image' style={{ backgroundImage:`url(${category.imageUrl})`}} />
      <div className='category-body-container'>
        <h2>{category.title}</h2>
        <p>shop now</p>
      </div>
    </div>
  )
}
export default CategoryItem;
