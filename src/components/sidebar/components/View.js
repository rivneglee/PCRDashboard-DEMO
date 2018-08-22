import React from 'react';
import TaskSettings from '../../task-settings';
import '../styls.scss';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openingModal: null
    }
  }

  openModal = (openingModal) => {
    this.setState({
      openingModal,
    });
  };

  closeModal = () => {
    this.setState({
      openingModal: null,
    });
  };

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__menu">
          <div className="sidebar__menu--item" onClick={() => this.openModal('task')}>
            <div className="sidebar__menu--icon fa fa-tasks"></div>
            <div className="sidebar__menu--label">NEW TASK</div>
          </div>
          <div className="sidebar__menu--item">
            <div className="sidebar__menu--icon fa fa-dashboard"></div>
            <div className="sidebar__menu--label">DEVICES</div>
          </div>
          <div className="sidebar__menu--item">
            <div className="sidebar__menu--icon fa fa-flask"></div>
            <div className="sidebar__menu--label">PROFILES</div>
          </div>
          <div className="sidebar__menu--item">
            <div className="sidebar__menu--icon fa fa-gears"></div>
            <div className="sidebar__menu--label">SETTING</div>
          </div>
        </div>
        <TaskSettings open={this.state.openingModal === 'task'}
                      onSave={this.closeModal}
                      onCancel={this.closeModal} />
      </div>
    );
  }
}

