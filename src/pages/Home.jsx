import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Categories,
  PizzaBlock,
  SortPopup,
  LoadingBlock,
  DrinkBlock,
  DessertBlock,
  SnackBlock,
  BurgerMenu,
} from '../components';

import { setCategory, setSortBy, setCategoryProduct } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/product';

const categoryProducts = ['Пиццы', 'Напитки', 'Десерты', 'Закуски'];
const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые'];
const sortItems = [
  { name: 'Популярности', type: 'popular', order: 'desc' },
  { name: 'Цене', type: 'price', order: 'desc' },
  { name: 'Алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ product }) => product.items);
  const itemsDrink = useSelector(({ product }) => product.itemsDrink);
  const itemsDesserts = useSelector(({ product }) => product.itemsDesserts);
  const itemsSnacks = useSelector(({ product }) => product.itemsSnacks);
  const cartItems = useSelector(({ cart }) => cart.items);
  const [activeBurger, setActiveBurger] = useState(false);
  const [activeBurgerPizza, setActiveBurgerPizza] = useState(false);
  const isLoaded = useSelector(({ product }) => product.isLoaded);
  const { categoryPizzas, sortBy, categoryProduct } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, categoryPizzas));
  }, [dispatch, sortBy, categoryPizzas]);

  const onSelectCategory = useCallback(
    (index) => {
      setActiveBurgerPizza(false);
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onSelectCategoryProduct = useCallback(
    (index) => {
      setActiveBurger(false);
      dispatch(setCategoryProduct(index));
    },
    [dispatch],
  );

  const onSelectSortType = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

  const onClickBurger = () => {
    setActiveBurger(!activeBurger);
  };

  const onClickBurgerPizza = () => {
    setActiveBurgerPizza(!activeBurgerPizza);
  };

  return (
    <main>
      <div className="container">
        <div className="content__top">
          <BurgerMenu onClick={onClickBurger} active={activeBurger} />
          <Categories
            trigger={activeBurger}
            activeCategory={categoryProduct}
            onClickCategory={onSelectCategoryProduct}
            items={categoryProducts}
          />
          <SortPopup
            activeSortType={sortBy.type}
            items={sortItems}
            onClickSortType={onSelectSortType}
          />
          {categoryProduct === 0 && (
            <BurgerMenu onClick={onClickBurgerPizza} active={activeBurgerPizza} />
          )}
        </div>
        <div className="content__items">
          {categoryProduct < 1 && (
            <h2 className="content__title">
              {categoryPizzas === null && categoryProduct === 0
                ? 'Все пиццы'
                : categoryNames[categoryPizzas]}
            </h2>
          )}
          {categoryProduct === 1 && <h2 className="content__title">Напитки</h2>}
          {categoryProduct === 2 && <h2 className="content__title">Десерты</h2>}
          {categoryProduct === 3 && <h2 className="content__title">Закуски</h2>}
          {categoryProduct === null && <h2 className="content__title">Все</h2>}

          {categoryProduct === 0 && (
            <Categories
              trigger={activeBurgerPizza}
              activeCategory={categoryPizzas}
              onClickCategory={onSelectCategory}
              items={categoryNames}
            />
          )}
          <div
            className={
              categoryProduct === 0 || categoryProduct === null
                ? 'content__items--product product__active'
                : 'content__items--product'
            }>
            {!isLoaded
              ? Array(12)
                  .fill(0)
                  .map((_, index) => <LoadingBlock key={index} />)
              : null}
            {(isLoaded && categoryProduct === 0) || categoryProduct === null
              ? items.map((obj) => (
                  <PizzaBlock
                    onClickAddPizza={handleAddPizzaToCart}
                    key={obj.id}
                    addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                    {...obj}
                  />
                ))
              : null}
          </div>
          <div
            className={
              categoryProduct === 1 || categoryProduct === null
                ? 'content__items--product product__active'
                : 'content__items--product'
            }>
            {(isLoaded && categoryProduct === 1) || categoryProduct === null
              ? itemsDrink.map((obj) => (
                  <DrinkBlock
                    key={obj.id}
                    onClickAddPizza={handleAddPizzaToCart}
                    addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                    {...obj}
                  />
                ))
              : null}
          </div>
          <div
            className={
              categoryProduct === 2 || categoryProduct === null
                ? 'content__items--product product__active'
                : 'content__items--product'
            }>
            {(isLoaded && categoryProduct === 2) || categoryProduct === null
              ? itemsDesserts.map((obj) => (
                  <DessertBlock
                    key={obj.id}
                    onClickAddPizza={handleAddPizzaToCart}
                    addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                    {...obj}
                  />
                ))
              : null}
          </div>
          <div
            className={
              categoryProduct === 3 || categoryProduct === null
                ? 'content__items--product product__active'
                : 'content__items--product'
            }>
            {(isLoaded && categoryProduct === 3) || categoryProduct === null
              ? itemsSnacks.map((obj) => (
                  <SnackBlock
                    key={obj.id}
                    onClickAddPizza={handleAddPizzaToCart}
                    addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                    {...obj}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
