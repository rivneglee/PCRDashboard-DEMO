import React from 'react';

import Device from './Device';
import '../styls.scss';

const View = ({ label, devices }) => (
  <div className="radar">
    <div>
      <div className="radar__pointer"></div>
      <div className="radar__shadow"></div>
      {
        devices.map(({ SN }) => (
          <Device key={SN} SN={SN} left={100} top={100} />
        ))
      }
    </div>
    <div className="radar__label">
      {label}
    </div>
  </div>
);

export default View;