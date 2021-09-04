import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={320}
      height={480}
      viewBox="0 0 280 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="145" cy="120" r="120" />
      <rect x="0" y="300" rx="10" ry="10" width="280" height="75" />
      <rect x="190" y="400" rx="10" ry="10" width="80" height="40" />
      <rect x="0" y="433" rx="0" ry="0" width="5" height="2" />
      <rect x="0" y="400" rx="20" ry="20" width="150" height="40" />
      <rect x="0" y="254" rx="10" ry="10" width="280" height="32" />
      <rect x="0" y="500" rx="0" ry="0" width="4" height="3" />
    </ContentLoader>
  );
}

export default LoadingBlock;
