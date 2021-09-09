import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SortPopup = React.memo(function SortPopup({ items, activeSortType, onClickSortType }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef(null);
  const activeLabel = items.find((obj) => obj.type === activeSortType).name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event) => {
    const path =
      event.path ||
      (event.composedPath && event.composedPath()) ||
      event.composedPath(event.target);
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    }
    setVisiblePopup(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <i className={visiblePopup ? 'fas fa-sort-down rotated' : 'fas fa-sort-down'}></i>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((obj, index) => {
                return (
                  <li
                    className={activeSortType === obj.type ? 'active' : ''}
                    onClick={() => onSelectItem(obj)}
                    key={`${obj.type}_${index}`}>
                    {obj.name}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func.isRequired,
};

SortPopup.defaultProps = {
  items: [],
};

export default SortPopup;
