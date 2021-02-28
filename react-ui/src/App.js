import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';

import TasksList from './Components/tasks-list.component';
import Navbar from './Components/navbar.component';
import EditTask from './Components/edit-task.component';
import CreateTask from './Components/new-create-task.component';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className='container'>
            <Navbar />
            <CreateTask />
            <Route path='/' exact component={TasksList} />
            <Route path='/edit/:id' component={EditTask} />
            </div>
        </Router>
      </header>
    </div>
  );

}

export default App;