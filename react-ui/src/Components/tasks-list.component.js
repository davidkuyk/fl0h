import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateTask from './new-create-task.component';
let dash = require('lodash');

const Task = props => (
  <tr>
    <td>{props.task.description}</td>
    <td>{props.distance}</td>
    <td>{props.task.date.substring(0,10)}</td>
    <td>{props.task.category}</td>
    <td>
      <Link to={`/edit/`+props.task._id}>edit</Link> | <button onClick={() => { props.deleteTask(props.task._id)}}>delete</button>
    </td>

  </tr>
)

export default class TasksList extends Component {
    constructor(props) {
      super(props);
      this.deleteTask = this.deleteTask.bind(this);
      this.state = {tasks: []};
    }

    componentDidMount() {
      axios.get('/tasks/')
        .then(response => {
          this.setState({ tasks: dash.orderBy(response.data, ['date'], 'asc') })
        })
        .catch((err) => {
          console.log(err);
        })
    }

    deleteTask(id) {
      axios.delete('/tasks/'+id)
        .then(res => console.log(res.data));

      this.setState({
        tasks: this.state.tasks.filter(el => el._id !== id)
      })
    }

    taskList() {     
      return this.state.tasks.map(currenttask => {
            let distance = Number((new Date(currenttask.date).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24));
            if (distance > 0) { distance = Math.ceil(distance) + ' days until'}
            else if (distance < 0) { distance = Math.ceil(Math.abs(distance)) + ' days ago'}
            else { distance = 'today'}
            return <Task task={currenttask} deleteTask={this.deleteTask} key={currenttask._id} distance={distance}/>;
          })
    }
    render() {
        return (
          <div className='tableWrapper'>
            <table className='table'>
              <thead className='thead-dark'>
                <tr> 
                  <th>Description</th>
                  <th>Distance</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <CreateTask />
                { this.taskList().sort((a,b) => b.date - a.date) }
              </tbody>
            </table>
          </div>
        )
      }
}