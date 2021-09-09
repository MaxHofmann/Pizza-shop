import React from 'react';


function BurgerMenu({ onClick, active }) {
  return (
    <>
    <div onClick={onClick} className="burger">
      <div className={active ? 'burger__menu active' : 'burger__menu'}></div>
    </div>
    </>
  );
}

export default BurgerMenu;
