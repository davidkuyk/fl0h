import React, { useState, useEffect } from 'react';

const Task = props => {

  const [description, setDescription] = useState(props.task.description);
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState('None');
  const [distance, setDistance] = useState('today');

  const onEdit = (currentMode, currentRowKey) => {
    props.editModeChange(currentMode, currentRowKey);
    }

    
      return (
      <tr>
        {/* Description */}
        <td>{props.task.description}</td>
        {/* Distance */}
        <td>{props.distance}</td>
        {/* Date */}
        <td>{props.task.date.substring(0,10)}</td>
        {/* Category */}
        <td>{props.task.category}</td>
        {/* Actions */}
        <td>
          {<>
            <button onClick={() => { 
              onEdit(true, props.task._id)
            }}>edit</button> 
            <button onClick={() => { props.deleteTask(props.task._id)}}>delete</button>
          </> }
        </td>
      </tr>
    )}

export default Task;