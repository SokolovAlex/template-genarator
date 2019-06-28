import React from 'react';
import LoaderSvg from './loader.inline.svg';

const Loader = ({ size = 20, className }) => (
  <div className={className} style={{ width: `${size}px`, height: `${size}px` }}>
    <LoaderSvg />
  </div>
);

export default Loader;
