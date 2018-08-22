import React from 'react';
import Spinner from './SpinnerCircle';

export default ({ state }) => {
  switch (state) {
    case 1:
      return <Spinner />
    case 2:
      return <div className="fa fa-2x fa-circle tasks__task--canceled"/>;
    case 3:
      return <div className="fa fa-2x fa-check tasks__task--succeed"/>;
    case 4:
      return <div className="fa fa-2x fa-flash tasks__task--error"/>;
    default:
      return null;
  }
};