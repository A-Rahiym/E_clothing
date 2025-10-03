import {  Fragment, React, useContext } from 'react'
import CategoryPreview from '../../components/Category_preview/Category-preview';
import { useSelector } from 'react-redux';
import { selectCategoryMap } from '../../store/categories/categories-selector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoryMap)
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          
          console.log(typeof products);
          return <CategoryPreview key={title} title={title} products={products}/>
        })
      }
    </Fragment>
  )
}

export default CategoriesPreview