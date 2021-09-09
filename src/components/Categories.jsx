import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
  trigger,
}) {
  return (
    <div className={trigger ? 'categories-active categories' : 'categories'}>
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items &&
          items.map((item, index) => {
            return (
              <li
                onClick={() => onClickCategory(index)}
                className={activeCategory === index ? 'active' : ''}
                key={`${item}_${index}`}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
