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

const Console = ({ logs }) => (
  <div className="console">
    {
      logs.map(log => (
        <div className={`console__log console__log--${log.type.toLowerCase()}`}>
          {`> ${log.type}: ${log.content}`}
        </div>
      ))
    }
  </div>
)

class View extends React.Component {
  state = {
    methodType: 1,
    runNow: true
  };

  cancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  render() {
    const { classes, taskDetails } = this.props;
    if (!taskDetails) return null;
    return (
      <div className={`${classes.container} task-details`}>
        <div>
          <TextField
            id="name"
            label="Name"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            defaultValue={taskDetails.name}
            margin="normal"
          />
          <TextField
            id="startTime"
            label="Start"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            defaultValue={taskDetails.startTime}
            margin="normal"
          />
          <TextField
            id="endTime"
            label="End"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            defaultValue={taskDetails.endTime}
            margin="normal"
          />
          <TextField
            id="port"
            label="Port"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            defaultValue={taskDetails.settings.port}
            margin="normal"
          />
          <TextField
            id="methodType"
            label="Method Type"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            defaultValue={taskDetails.settings.methodType}
            margin="normal"
          />
          <TextField
            id="methodCycles"
            label="Method Cycles"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            defaultValue={taskDetails.settings.methodCycles}
            margin="normal"
          />
          <TextField
            id="methodCycleTime"
            label="Method Cycle Time"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            defaultValue={taskDetails.settings.methodCycleTime}
            margin="normal"
          />
          <TextField
            id="methodDarkSignal"
            label="Method Dark Signal"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            defaultValue={taskDetails.settings.methodDarkSignal}
            margin="normal"
          />
        </div>
        <Console logs={taskDetails.logs} />
        <div>
          <Button onClick={this.cancel} variant="contained" color="primary" className={classes.button}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(View);