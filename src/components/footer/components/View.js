import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TaskSettings from '../../task-settings';
import '../styles.scss';

const styles = {
  root: {
    width: '100%',
  },
};

const TaskIcon = () => (<div className="fa fa-2x fa-tasks"/>);
const ProfileIcon = () => (<div className="fa fa-2x fa-flask"/>);
const DeviceIcon = () => (<div className="fa fa-2x fa-dashboard"/>);
const SettingsIcon = () => (<div className="fa fa-2x fa-gears"/>);

const View = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openingModal: null
    }
  }

  openModal = (event, openingModal) => {
    if (openingModal !== undefined) {
      this.setState({
        openingModal,
      });
    }
  };

  closeModal = () => {
    this.setState({
      openingModal: null,
    });
  };

  render() {
    const { classes } = this.props;
    const { openingModal } = this.state;
    return (
      <div className="footer">
        <BottomNavigation
          onChange={this.openModal}
          showLabels
          value={openingModal}
          className={classes.root}
        >
          <BottomNavigationAction label="NEW TASK" icon={<TaskIcon />} />
          <BottomNavigationAction label="DEVICES" icon={<DeviceIcon />} />
          <BottomNavigationAction label="PROFILES" icon={<ProfileIcon />} />
          <BottomNavigationAction label="SETTINGS" icon={<SettingsIcon />} />
          <TaskSettings open={openingModal === 0}
                        onSave={this.closeModal}
                        onCancel={this.closeModal} />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles)(View);

