import React from 'react'
import './Category.scss'
import CategoryItem from './Category_item';

const Category = ({categories}) => {
  return (
    <div className='categories-container'>
      {categories.map((category)=>{
        return <CategoryItem key={category.uid} category={category}/>
      })}
    </div>
  )
}

export default Category
