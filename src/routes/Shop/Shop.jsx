import {React , useContext} from 'react'
import "./Shop.scss"
import { ProductContext } from '../../contexts/products';
import ProductCard from '../../components/Product-card/Product-card';

const Shop = () => {
  const {Products} = useContext(ProductContext);
  return (
    <div className='products-container'>
        {Products.map((product)=>(
            <div>
                <ProductCard key={product.id} product={product}/>
            </div>
        ))}
    </div>
  )
}

export default Shop