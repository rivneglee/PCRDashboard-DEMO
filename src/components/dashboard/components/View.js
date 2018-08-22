import React from 'react';
import Radar from '../../radar';
import Sidebar from '../../sidebar';
import Tasks from '../../task-list';
import Archives from '../../archives';
import Header from '../../header';
import Footer from '../../footer';
import { getTasks } from '../../../services/TaskService';
import '../styls.scss';

const tasks = [
  { name: 'TEST 1', startTime: 'Sat 17:35:29', progress: 56 },
  { name: 'TEST 2', startTime: 'Sat 17:45:15', progress: 26 },
  { name: 'TEST 3', startTime: 'Sat 17:65:42', progress: 36 }
];

const records = [
  { name: 'REC 1', date: '2018/08/01 13:00:00' },
  { name: 'REC 2', date: '2018/08/01 14:00:00' },
  { name: 'REC 3', date: '2018/08/01 15:00:00' }
];

const View = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    setInterval(() => {
      getTasks().then(tasks => {
        this.setState({
          tasks,
        });
      });
    }, 2000);

    // this.setState({
    //   tasks: [{id: 'foo', name: 'Demo', state: 1}],
    // });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="dashboard">
          <div className="dashboard__sidebar">
            <Sidebar />
          </div>
          <div className="dashboard__content">
            <Radar />
            <div className="dashboard__content--two-columns">
              <Tasks tasks={tasks} />
              <Archives records={records} />
            </div>
          </div>
        </div>
        <div className="dashboard__footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default View;