import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, CartItem } from '../components';
import { clearCart, minusCartItem, plusCartItem } from '../redux/actions/cart';
import сartEmptyImage from '../assets/img/empty-cart.png';

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
  const [visibleCart, setVisibleCart] = useState(false)

  const addProduct = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    setVisibleCart(!visibleCart)
  };

  const onClear = () => {
    dispatch(clearCart());
  }

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  }

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  }

  return (
    <div className="container container--cart">
      {totalCount ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              Корзина
            <i className="fas fa-cart-plus"></i>
            </h2>
            <Button onClick={onClearCart} className={visibleCart ? "cart__clear--hover cart__clear" : 'cart__clear button button--outline'}>
              <i className="far fa-trash-alt"></i>
              <span>Очистить корзину</span>
              {visibleCart && <span className={visibleCart ? "cart__clear--visible visible--left cart__clear" : ''}> Вы уверенны?</span>}
              {visibleCart && <span className={visibleCart ? "cart__clear--visible visible--right cart__clear" : ''}>
                <span className="clear--visible" onClick={onClear}>Да</span>
                <span className="clear--visible" >Нет</span>
                </span>}
            </Button>
          </div>
          <div className="content__items">
            {addProduct.map((obj) => (
              <CartItem
                key={obj.id}
                id={obj.id}
                img={obj.imageUrl}
                name={obj.name}
                type={obj.type}
                size={obj.size}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
              />
              
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего продуктов: <b>{totalCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice}</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link to="/" className="button button--outline button--add go-back-btn go-back-btn-revers">
              <i className="fas fa-step-backward"></i>
              <span>Вернуться</span>
              </Link>
              <div className="button button--outline button--add go-back-btn">
                <span>Оплатить</span>
                <i className="far fa-credit-card"></i>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart cart--empty">
          <h2>Корзина пустая </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={сartEmptyImage} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
