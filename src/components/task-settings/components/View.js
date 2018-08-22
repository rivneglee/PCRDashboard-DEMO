import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { createTask } from '../../../services/TaskService';
import '../styles.scss';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const methodTypes = [
  {
    value: 1,
    label: 'E1D1',
  },
  {
    value: 2,
    label: 'E1D2',
  },
  {
    value: 3,
    label: 'E2D2',
  },
  {
    value: 4,
    label: 'E1D1+E1D2',
  },
  {
    value: 5,
    label: 'E1D1+E2D2',
  },
  {
    value: 6,
    label: 'E1D2+E2D2',
  },
  {
    value: 7,
    label: 'E1D1+E1D2+E2D2',
  },
  {
    value: 8,
    label: 'Scan E1D1',
  },
  {
    value: 9,
    label: 'Scan E1D2',
  },
  {
    value: 10,
    label: 'Scan E2D2',
  },
];

const profiles = [
  {
    label: '检测Profile A',
    value: {
      methodType: 2,
      port: 15,
      methodCycles: 2,
      methodCycleTime: 5,
      methodAverage: 10
    }
  },
  {
    label: '检测Profile B',
    value: {
      methodType: 1,
      port: 3,
      methodCycles: 10,
      methodCycleTime: 1,
      methodAverage: 5
    }
  }
];

class View extends React.Component {
  state = {
    methodType: 1,
    runNow: true
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  setProfile = (event) => {
    const profile = event.target.value;
    this.setState({
      ...profiles.find(({ label }) => label === profile).value,
      profile,
    })
  };

  saveTask = () => {
    const { onSave } = this.props;
    createTask(this.state);
    if (onSave) {
      onSave();
    }
  };

  cancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={`${classes.container} task-settings`}>
        <div>
          <TextField
            id="name"
            label="Name"
            InputLabelProps={{
              shrink: !!this.state.name,
            }}
            fullWidth
            required
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            helperText="Give a name for your task"
          />
          <TextField
            id="profile"
            select
            fullWidth
            InputLabelProps={{
              shrink: !!this.state.profile,
            }}
            label="Profile"
            value={this.state.profile}
            onChange={this.setProfile}
            SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
            helperText="You can select a profile for your testing"
            margin="normal"
          >
            {profiles.map(option => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="methodType"
            select
            InputLabelProps={{
              shrink: !!this.state.methodType,
            }}
            label="MethodType"
            className={classes.textField}
            value={this.state.methodType}
            onChange={this.handleChange('methodType')}
            SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
            helperText="Please select your method type"
            margin="normal"
          >
            {methodTypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            type="number"
            InputLabelProps={{
              shrink: !!this.state.port,
            }}
            id="port"
            label="Port #"
            onChange={this.handleChange('port')}
            value={this.state.port}
            className={classes.textField}
            margin="normal"
            helperText="Port # your device connected to"
          />
          <TextField
            required
            type="number"
            InputLabelProps={{
              shrink: !!this.state.methodCycles,
            }}
            id="methodCycles"
            label="Method Cycles"
            value={this.state.methodCycles}
            onChange={this.handleChange('methodCycles')}
            className={classes.textField}
            margin="normal"
            helperText="Numbers of measurements"
          />
          <TextField
            required
            type="number"
            id="methodCycleTime"
            onChange={this.handleChange('methodCycleTime')}
            label="Method Cycle Time"
            InputLabelProps={{
              shrink: !!this.state.methodCycleTime,
            }}
            value={this.state.methodCycleTime}
            className={classes.textField}
            margin="normal"
            helperText="Interval in Sec between cycles"
          />
          <TextField
            required
            type="number"
            InputLabelProps={{
              shrink: !!this.state.methodAverage,
            }}
            id="methodAverage"
            onChange={this.handleChange('methodAverage')}
            label="Method Average"
            value={this.state.methodAverage}
            className={classes.textField}
            margin="normal"
            helperText="Numbers of single values"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.runNow}
                onChange={this.handleChange('runNow')}
                value={this.state.runNow}
                color="primary"
              />
            }
            label="Run Immediately"
          />
        </div>
        <div>
          <Button onClick={this.saveTask} variant="contained" color="primary" className={classes.button}>
            Save
          </Button>
          <Button onClick={this.cancel} variant="contained" color="primary" className={classes.button}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(View);