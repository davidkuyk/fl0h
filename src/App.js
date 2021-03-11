import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import TasksList from './Components/tasks-list.component';
import Loading from './Components/loading.js'
import Navbar from './Components/navbar.component';
import EditTask from './Components/edit-task.component';
import CreateTask from './Components/new-create-task.component';
let dash = require('lodash');

function App() {

  const [tasks, setTasks] = useState({tasks: []});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      axios.get('/tasks/')
        .then(response => {
          const orderedTasks = dash.orderBy(response.data, ['date'], 'asc');
          setTasks({tasks: orderedTasks});
        })
        .then(() => {
          setTimeout(() => {
            setLoading(false);
          }, 1000)   
        })
        .catch((err) => {
          console.log(err);
        })
    }, []);

  if (loading) {
    return (
      // <h1>Loading...</h1>
      <Loading />
    );
  } else {
    return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className='container'>
            <Navbar />
            <CreateTask />
            <Route path='/' exact render={() => (<TasksList tasks={tasks} setTasks={setTasks} component={TasksList} />)} />
            <Route path='/edit/:id' component={EditTask} />
            </div>
        </Router>
      </header>
    </div>
  );
  }
}

export default App;