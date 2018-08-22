import React from 'react';
import Radar from './Radar';

const View = () => (
  <div className="radar-panel">
    <div className="radar-panel__header">DEVICE RADARS</div>
    <div className="radar-panel__section">
      <Radar label="WIFI" devices={[]}/>
      <Radar label="USB" devices={[{SN:'3401'}]}/>
    </div>
  </div>
);

export default View;