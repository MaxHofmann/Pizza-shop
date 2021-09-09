import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

function DessertBlock({
  id,
  name,
  description,
  imageUrl,
  price,
  size,
  addedCount,
  onClickAddPizza,
}) {
  const onAddPizza = () => {
    const obj = {
      id,
      name,
      description,
      imageUrl,
      price: price,
      size: size + ' гр.',
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <p className="pizza-block__description--product">{description}</p>
      <div className="pizza-block__selector">
        <span>{size} гр.</span>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          {price} <i className="fas fa-hryvnia"></i>
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

DessertBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sizes: PropTypes.number.isRequired,
  onClickAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};

DessertBlock.defaultProps = {
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/ru/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png',
  name: 'name',
  price: 0,
  sizes: 0,
};

export default DessertBlock;
