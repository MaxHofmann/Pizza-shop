import React from 'react';

function ParallaxItem({ numberX, numberY, srcItem, x, y }) {
  const item = {
    transform: `translate(${x / numberX}%, ${y / numberY}%)`,
  };

  return <img style={item} className="parallax__content--item" src={srcItem} alt="svg" />;
}

export default ParallaxItem;
