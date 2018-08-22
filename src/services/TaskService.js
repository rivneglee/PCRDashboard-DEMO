
const ADDRESS = '10.201.132.136:59720';
const ENDPOINT = `http://${ADDRESS}/api/tasks`;

const logTypes = {
  0: 'DEBUG',
  1: 'INFO',
  2: 'ERROR',
}

const methodTypes = {
  1: 'E1D1',
  2: 'E1D2',
  3: 'E2D2',
  4: 'E1D1+E1D2',
  5: 'E1D1+E2D2',
  6: 'E1D2+E2D2',
  7: 'E1D1+E1D2+E2D2',
  8: 'Scan E1D1',
  9: 'Scan E1D2',
  10: 'Scan E2D2',
};

const adaptSettings = ({ name, methodType, port, methodCycles, methodCycleTime }) => ({
  Name: name,
  MethodType: Number(methodType),
  SerialPortNumber: Number(port),
  MethodCycles: Number(methodCycles),
  MethodCycleTime: Number(methodCycleTime)
});

const adaptTask = (task) => ({
  id: task.Id,
  name: task.Settings.Name,
  state: task.State,
});

const adaptTaskMonitor = (monitor) => {
  const { Task, Logs, StartTime, EndTime } = monitor;
  const { Settings } = Task;
  return {
    name: Settings.Name,
    startTime: StartTime.substring(0, 19),
    endTime: EndTime.substring(0, 19),
    settings: {
      port: Settings.SerialPortNumber,
      methodType: methodTypes[Settings.MethodType],
      methodCycles: Settings.MethodCycles,
      methodCycleTime: Settings.MethodCycleTime,
      methodDarkSignal: Settings.MethodDarkSignal,
      methodTrigger: Settings.MethodTrigger
    },
    logs: Logs.map(({ Content, Type }) => ({
      content: Content,
      type: logTypes[Type]
    }))
  }
};

const createTask = (settings) => {
  const opts = {
    method:"POST",
    body: JSON.stringify(adaptSettings(settings)),
    mode: "cors",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }
  return fetch(ENDPOINT, opts)
    .then(response => response.json());
};

const getTasks = () => {
  return fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => data.map((task) => adaptTask(task)));
};

const getTaskDetails = (id) => {
  return fetch(`${ENDPOINT}/${id}`)
    .then(response => response.json())
    .then(monitor => adaptTaskMonitor(monitor));
};

const deleteTask = (id) => {

};

const runTask = (id) => {
  const opts = {
    method:"PUT",
    mode: "cors",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }
  return fetch(`${ENDPOINT}/${id}`, opts)
    .then(response => response.json());
};

export const TASK_STATE_NEW = 0;
export const TASK_STATE_RUNNING = 1;
export const TASK_STATE_DONE = 2;
export const TASK_STATE_ERROR = 3;

export {
  createTask,
  getTasks,
  runTask,
  getTaskDetails,
}