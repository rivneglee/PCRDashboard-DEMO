import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import View from './View';

export default class extends React.Component {
  render() {
    const { onCancel, taskDetails, ...rest } = this.props;
    return (
      <Dialog open={!!taskDetails} {...rest}>
        <DialogTitle>Task Details</DialogTitle>
        <View onCancel={onCancel} taskDetails={taskDetails} />
      </Dialog>
    );
  }
};