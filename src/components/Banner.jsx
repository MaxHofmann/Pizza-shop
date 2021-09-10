import React from 'react';
import { background, logoSvg } from '../assets';

function Banner() {
  return (
    <div className="banner">
      <div className="banner__block" style={{ backgroundImage: `url(${background})` }}>
        <div className="banner__block--wrap">
          <h1 className="notranslate">Pizza shop</h1>
          <img src={logoSvg} alt="logoSvg" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
