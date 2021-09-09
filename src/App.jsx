import React, { useState } from 'react';

import { Banner, Footer, Header, Parallax } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { img1, img2, img3, img4, img5, img6 } from './assets';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onHandleImg = (e) => {
    setX((window.innerWidth - e.clientX * -5) / 100);
    setY((window.innerHeight - e.clientY * -5) / 100);
  };
  return (
    <div onMouseMove={onHandleImg} className="wrapper">
      <Parallax numberX={3} numberY={1} srcItem={img1} x={x} y={y} />
      <Parallax numberX={1} numberY={4} srcItem={img2} x={x} y={y} />
      <Parallax numberX={3} numberY={1} srcItem={img3} x={x} y={y} />
      <Parallax numberX={5} numberY={3} srcItem={img4} x={x} y={y} />
      <Parallax numberX={3} numberY={1} srcItem={img5} x={x} y={y} />
      <Parallax numberX={3} numberY={4} srcItem={img6} x={x} y={y} />
      <div className="content">
        <Header />
        <Route exact path="/" component={Banner} />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
