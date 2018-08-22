import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import View from './View';

export default class extends React.Component {
  render() {
    const { onCancel, onSave, SN, ...rest } = this.props;
    return (
      <Dialog {...rest}>
        <DialogTitle>Device Settings</DialogTitle>
        <View SN={SN} onCancel={onCancel} onSave={onSave} />
      </Dialog>
    );
  }
};