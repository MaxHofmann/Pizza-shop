import React, { useState } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';

function PizzaBlock({
  id,
  name,
  description,
  imageUrl,
  price,
  types,
  sizes,
  onClickAddPizza,
  addedCount,
}) {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];

  const [activeType, SetActiveType] = useState(types[0]);
  const [activeSize, SetActiveSize] = useState(sizes[0]);
  const [activePrice, SetActivePrice] = useState(price);
  const [activeDescription, SetDescription] = useState(false);

  const onDescription = () => {
    SetDescription(!activeDescription);
  };

  const setPercent = (price, percent) => {
    return Math.round(price + (price * percent) / 100);
  };

  const onUniteSelectActive = (index, size) => {
    let typesize = [index, size].join('');

    if (index > -1 && activeType !== index) {
      SetActiveType(index);
    } else if (size && activeSize !== size) {
      SetActiveSize(size);
    }

    switch (typesize) {
      case '030':
        return SetActivePrice(setPercent(price, 25));
      case '040':
        return SetActivePrice(setPercent(price, 50));
      case '026':
        return SetActivePrice(price);
      case '130':
        return SetActivePrice(setPercent(price, 50));
      case '140':
        return SetActivePrice(setPercent(price, 75));
      case '126':
        return SetActivePrice(setPercent(price, 25));
      default:
    }
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price: activePrice,
      size: activeSize + ' см.',
      type: availableTypes[activeType],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <i onClick={onDescription} className="fas fa-align-right pizza-block__icon"></i>
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <p
        className={
          activeDescription ? 'pizza-block__description' : 'pizza-block__description--false'
        }>
        <i className="fas fa-pizza-slice"></i>
        {description}
      </p>
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              disabled="disabled"
              key={type}
              onClick={() => onUniteSelectActive(index, activeSize)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size) => (
            <li
              key={size}
              onClick={() => onUniteSelectActive(activeType, size)}
              className={classNames({
                active: activeSize === size,
                disabled: !sizes.includes(size),
              })}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          от {activePrice} <i className="fas fa-hryvnia"></i>
        </div>
        <Button onClick={onAddPizza} className="button--add" outline>
          <span>Добавить</span>
          {!addedCount && <i className="far fa-plus-square"></i>}
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClickAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/ru/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png',
  name: 'name',
  price: 0,
  types: [],
  sizes: [],
};

export default PizzaBlock;
