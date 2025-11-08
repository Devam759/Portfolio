import React from 'react';
import './FlowingWaves.css';

const FlowingWaves = () => {
  return (
    <div className="wave-animation-container" aria-hidden>
      <div className="wave-layer dark-textured"></div>
      <div className="wave-layer dark-solid"></div>
      <div className="wave-layer white"></div>
    </div>
  );
};

export default FlowingWaves;
