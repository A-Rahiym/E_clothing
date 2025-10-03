import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/Categories-preview";
import Category from "../Category/Category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategoriesMap } from "../../store/categories/categories-action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const CategoryMap = await getCategoriesAndDocuments();
      // console.log(CategoryMap)
      dispatch(setCategoriesMap(CategoryMap));
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
