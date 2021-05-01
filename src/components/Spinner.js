import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div style={{ width: '200px', display: 'block', margin: 'auto' }}>
      <img src={spinner} alt="" />
    </div>
  );
};

export default Spinner;
