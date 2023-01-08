import { useParams } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import './category.style.scss';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProduct] = useState([]);

  const isCategoriesMapExist = !!Object.keys(categoriesMap).length;

  useEffect(() => {
    if (isCategoriesMapExist) {
      setProduct(categoriesMap[category]);
    }
  }, [category, categoriesMap, isCategoriesMapExist]);

  return (
    <div className={'category-container'}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Category;
