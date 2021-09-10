import React from 'react';
import { useSelector } from 'react-redux';
import logoSvg from '../assets/img/pizza-logo.svg';
import { Button } from '.';
import { Link } from 'react-router-dom';

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1 className="notranslate">Pizza shop</h1>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="Cart">
            <Button className="button--cart">
              <span className="number-item">{totalPrice}</span>
              <div className="button__delimiter"></div>
              <i className="fas fa-cart-plus"></i>
              <span className="number-item">{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
