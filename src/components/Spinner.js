import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    // it better to use css not inline style
    <div style={{ width: '200px', display: 'block', margin: 'auto' }}>
      {/* the spinner shout not be as a gif it better to use css https://projects.lukehaas.me/css-loaders/  */}
      <img src={spinner} alt="" />
    </div>
  );
};

export default Spinner;
