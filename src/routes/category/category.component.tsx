import { useParams } from 'react-router-dom';
import React, { useState, useEffect, Fragment } from 'react';

import './category.style.scss';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';
import { CategoryItem } from '../../store/categories/categories.types';

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProduct] = useState<CategoryItem[]>([]);

  const isCategoriesMapExist = !!Object.keys(categoriesMap).length;

  useEffect(() => {
    if (isCategoriesMapExist) {
      setProduct(categoriesMap[category]);
    }
  }, [category, categoriesMap, isCategoriesMapExist]);

  return (
    <Fragment>
      <h2 className={'category-title'}>{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={'category-container'}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
