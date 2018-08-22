import React from 'react';
import '../styles.scss';

const View = ({ records }) => (
  <div className="archives">
    <div className="archives__header">ARCHIVES</div>
    <div className="archives__section">
      {
        records.map(({ name, date }) => (
          <div key={name} className="archives__record">
            <div>
              <span className="archives__record--name">{name}</span>
              <span className="archives__record--date">{date}</span>
            </div>
            <div>
              <span className="tasks__task--icon fa fa-file-archive-o"></span>
              <span className="tasks__task--icon fa fa-area-chart"></span>
              <span className="tasks__task--icon fa fa-download"></span>
              <span className="tasks__task--icon fa fa-trash"></span>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);

export default View;