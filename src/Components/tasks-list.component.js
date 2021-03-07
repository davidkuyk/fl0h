import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
let dash = require('lodash');

const TasksList = () => {

    const [tasks, setTasks] = useState({tasks: []});

    console.log(tasks)

    const Task = props => (
      <tr>
        <td>{props.task.description}</td>
        <td>{props.distance}</td>
        <td>{props.task.date.substring(0,10)}</td>
        <td>{props.task.category}</td>
        <td>
          <Link to={`/edit/`+props.task._id}>edit</Link> <button onClick={() => { props.deleteTask(props.task._id)}}>delete</button>
        </td>
      </tr>
    )

    const deleteTask = (id) => {
          axios.delete('/tasks/'+id)
            .then(res => console.log(res.data));
          setTasks({tasks: tasks.tasks.filter(el => el._id !== id)})
        }

    const theList = () => {
      return tasks.tasks.map(currenttask => {
          const dt2 = new Date(currenttask.date);
          const d2F = new Date(dt2.toDateString())
          console.log('d2F ', d2F)
          const dt1 = new Date();
          console.log('dt1 ', dt1)
          const d1F = new Date(dt1.toDateString())
          console.log('d1F ', d1F)
          let distance = Math.floor((d2F - d1F)) / (1000 * 60 * 60 * 24);
          console.log('Math.floor(d2F-d1F) ', Math.floor((d2F - d1F)))
          console.log('distance ', distance)
          if (distance == 1) { distance = '1 day until'}
          else if (distance > 1) { distance = Math.ceil(distance) + ' days until'}
          else if (distance == -1) { distance = '1 day ago'}
          else if (distance < -1) { distance = Math.ceil(Math.abs(distance)) + ' days ago'}
          else { 
              distance = 'today'
            }
          return <Task task={currenttask} deleteTask={deleteTask} key={currenttask._id} distance={distance}/>;
        })
    }

    useEffect(() => {
      axios.get('/tasks/')
        .then(response => {
          const orderedTasks = dash.orderBy(response.data, ['date'], 'asc')
          setTasks({tasks: orderedTasks})
        })
        .catch((err) => {
          console.log(err);
        })
    }, []);

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
                { theList() }
              </tbody>
            </table>
          </div>
        )
}

export default TasksList;