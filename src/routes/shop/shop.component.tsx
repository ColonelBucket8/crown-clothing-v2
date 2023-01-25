import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.style.scss';
import { fetchCategoriesStart } from '../../store/categories/categories.action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(fetchCategoriesStart());
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
