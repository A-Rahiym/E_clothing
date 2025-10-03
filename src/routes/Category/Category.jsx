import "./Category.scss";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product-card/Product-card";
import { useSelector } from "react-redux";
import { selectCategoryMap } from "../../store/categories/categories-selector";
const Category = () => {
  const { category } = useParams();
  // const {categoriesMap} = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoryMap);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toLocaleUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};
export default Category;
