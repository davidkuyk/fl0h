import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import TasksList from './Components/tasks-list.component';
import Loading from './Components/loading.js'
import Navbar from './Components/navbar.component';
import EditTask from './Components/edit-task.component';
import Login from './Components/login.js'
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
          }, 500)   
        })
        .catch((err) => {
          console.log(err);
        })
    }, []);

  if (loading) {
    return (
      <Loading />
    );
  } else {
    return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className='container'>
            <Navbar />
            <Route exact path='/' render={() => (<TasksList tasks={tasks} setTasks={setTasks} component={TasksList} />)} />
            <Route exact path='/edit/:id' component={EditTask} />
            <Route exact path='/login' component={Login} />
            </div>
        </Router>
      </header>
    </div>
  );
  }
}

export default App;