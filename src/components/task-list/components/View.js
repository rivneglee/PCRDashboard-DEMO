import React from 'react';
import { runTask, getTaskDetails } from '../../../services/TaskService';
import StateIcon from './StateIcon';
import TaskDetails from '../../task-details';
import '../styles.scss';

const getStateText = (state) => {
  if (state === 0) return 'New';
  if (state === 1) return 'Running';
  if (state === 2) return 'Canceled';
  if (state === 3) return 'Finished';
  if (state === 4) return 'Failed';
};

const View = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openingModal: null
    }
  }

  openDetailsModal = (id) => {
    this.monitorTimer = setInterval(() => {
      getTaskDetails(id).then(json => {
        this.setState({
          taskDetails: json,
        });
      });
    }, 1500);
  };

  closeDetailsModal = () => {
    this.setState({
      taskDetails: null,
    });
    clearInterval(this.monitorTimer);
  };

  render() {
    const { tasks } = this.props;
    return (
      <div className="tasks">
        <div className="tasks__header">TASKS</div>
        {
          tasks.length == 0 &&
          <div className="tasks__message">Nothing to display...</div>
        }
        { tasks.length > 0 &&
        <div className="tasks__section">
          {
            tasks.map(({ id, name, state }) => (
              <div key={id} className="tasks__task">
                <div>
                  <div className="tasks__task--title">{name}</div>
                  <div className="tasks__task--subtitle">{getStateText(state)}</div>
                </div>
                <StateIcon state={state} />
                <div className="tasks__task__buttons">
                  {state === 0 && <span className="tasks__task--icon fa fa-play" onClick={() => runTask(id)}></span>}
                  {(state === 2 || state === 3 || state === 4) && <span className="tasks__task--icon fa fa-refresh" onClick={() => runTask(id)}></span>}
                  {state === 1 && <span className="tasks__task--icon fa fa-stop"></span>}
                  <span className="tasks__task--icon fa fa-gear"></span>
                  <span className="tasks__task--icon fa fa-clock-o"></span>
                  {(state === 1 || state === 3 || state === 4) && <span className="tasks__task--icon fa fa-television" onClick={() => this.openDetailsModal(id)}></span>}
                  <span className="tasks__task--icon fa fa-trash"></span>
                </div>
              </div>
            ))
          }
        </div>
        }
        <TaskDetails taskDetails={this.state.taskDetails}
                      onCancel={this.closeDetailsModal} />
      </div>
    );
  }
};

export default View;