import React, { useState } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../redux/actions/cart';

function CartItem({ id, name, img, type, size, totalPrice, totalCount, onMinus, onPlus }) {
  const [visibleItem, setVisibleItem] = useState(false);
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    setVisibleItem(!visibleItem);
  };

  const onRemove = () => {
    dispatch(removeCartItem(id));
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={img} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {type} {size}
        </p>
      </div>
      <div className="cart__item-count">
        <Button onClick={handleMinusItem} className="button button--circle " outline>
          <i className="fas fa-minus"></i>
        </Button>
        <b>{totalCount}</b>
        <Button
          onClick={handlePlusItem}
          className="button button--circle cart__item-count-plus"
          outline>
          <i className="fas fa-plus"></i>
        </Button>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice}</b>
      </div>
      <div className="cart__item-remove">
        <Button onClick={onRemoveItem} className="button--circle" outline>
          <i className="fas fa-times"></i>
        </Button>
        {visibleItem && <span className="visible--remove"> Вы уверенны?</span>}
        {visibleItem && (
          <span onClick={onRemove} className="remove--visible remove--visible-top">
            Да
          </span>
        )}
        {visibleItem && (
          <span onClick={onRemoveItem} className="remove--visible remove--visible-bottom">
            Нет
          </span>
        )}
      </div>
    </div>
  );
}

export default CartItem;
