import React from 'react'
import './DirectoryItem.jsx.scss'
const DirectoryItem = ({category}) => {
  const {title , imageUrl} = category;
  return (
    <div className='Directory-item-container'>
      <div className='background-image' style={{ backgroundImage:`url(${imageUrl})`}} />
      <div className='body'>
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  )
}
export default DirectoryItem;
