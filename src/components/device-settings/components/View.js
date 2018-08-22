import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

  save= () => {
    const { onSave } = this.props;
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
      <div className={`${classes.container} device-settings`}>
        <div>
          <TextField
            id="SN"
            fullWidth
            label="SN"
            InputProps={{
              readOnly: true,
            }}
            defaultValue={this.props.SN}
            helperText="SN of device board"
            margin="normal"
          />
          <TextField
            id="Port"
            fullWidth
            label="Port"
            InputProps={{
              readOnly: true,
            }}
            defaultValue={3}
            helperText="Serial port number"
            margin="normal"
          />
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
            helperText="Name your device"
          />
          <TextField
            id="temperature"
            label="Temperature"
            InputLabelProps={{
              shrink: !!this.state.temperature,
            }}
            fullWidth
            required
            value={this.state.temperature}
            onChange={this.handleChange('temperature')}
            margin="normal"
            helperText="Board temperature"
          />
        </div>
        <div>
          <Button onClick={this.sask} variant="contained" color="primary" className={classes.button}>
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