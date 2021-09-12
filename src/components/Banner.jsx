import React from 'react';
import { logoSvg } from '../assets';

function Banner() {
  return (
    <div className="banner">
      <div className="banner__block" >
        <div className="banner__block--wrap">
          <h1 className="notranslate">Pizza shop</h1>
          <img src={logoSvg} alt="logoSvg" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
