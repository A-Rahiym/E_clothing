import React from 'react'
import { useNavigate } from 'react-router-dom';
import { DirectoryItemContainer,BackgroundImage,Body } from './DirectoryItem.Style';
const DirectoryItem = ({category}) => {
  const {title , imageUrl , route} = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage  imageUrl={imageUrl}/>
      <Body>
        <h2>{title}</h2>
        <p>shop now</p>
      </Body>
    </DirectoryItemContainer>
  )
}
export default DirectoryItem;