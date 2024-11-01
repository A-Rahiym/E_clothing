import './Category.scss'
import { useContext , useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/Product-card/Product-card';

import { CategoriesContext } from '../../contexts/categories';

const Category = () => {
    const {category} = useParams(); 
    const {categoriesMap} = useContext(CategoriesContext);
    const [products , setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    },[category , categoriesMap] );

    return (
        <div className='category-container'>
            {
                products &&
                products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    )
}

export default Category