import React from 'react';
import DeviceSettings from '../../device-settings';

const Device = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  onSave = () => {
    this.setState({
      showModal: false
    });
  };

  onClose = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    const { left, top, SN } = this.props;
    const { showModal } = this.state;
    return (
      <div className="device" style={{ left, top }}>
        <span className="fa fa-thermometer" />
        <span className="device__label" onClick={() => {this.setState({showModal: true})}}>{SN}</span>
        <DeviceSettings open={showModal} SN={SN} onSave={this.onSave} onCancel={this.onClose} />
      </div>
    )
  }
};

export default Device;
