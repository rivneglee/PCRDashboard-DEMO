import React from 'react';
import '../styles.scss';
import Logo from './Logo';
const View = () => (
  <div className="header">
    <Logo />
    <div className="header__title">
      PCR DASHBOARD
    </div>
  </div>
);

export default View;