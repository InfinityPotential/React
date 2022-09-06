import { useEffect, useState } from 'react';
import './App.css';
import Control from './components/Control';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  var [tasks, setTask] = useState({
    tasks: []
  })
  useEffect(() => {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      setTask({
        tasks: tasks
      })
    }
}, [])
  function onGenerateData () {
    var tasks = [
      {
        id: generateID(),
        name: 'Hoc lap trinh',
        status: true
      },
      {
        id: generateID(),
        name: 'Di boi',
        status: true
      },
      {
        id: generateID(),
        name: 'Ngu',
        status: true
      }
    ];
    setTask({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  function s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }
  function generateID(){
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  var {tasks} = tasks;
  return (
  <div className="container">
    <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr/>
    </div>
    <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <TaskForm/>
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <button type="button" 
                    className="btn btn-danger ml-5"
                    onClick={onGenerateData}
                    >
                Generate Data
            </button>
            <Control/>
            <div className="row mt-15">
              <TaskList tasks = {tasks}/>
            </div>
        </div>
    </div>
  </div>
  );
}

export default App;
