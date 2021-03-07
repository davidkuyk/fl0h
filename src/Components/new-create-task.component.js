import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateTask = () => {

  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState('None');
  const [distance, setDistance] = useState('today');


  const onChangeDescription = (e) => {
      setDescription(e.target.value)
    };

  const onChangeDate = (date) => {
      const dt2 = new Date(date);
      const d2F = new Date(dt2.getFullYear() + '-' + (dt2.getMonth() + 1) + '-' + dt2.getDate())
      const dt1 = new Date();
      const d1F = new Date(dt1.getFullYear() + '-' + (dt1.getMonth() + 1) + '-' + dt1.getDate())
      let currdistance = Math.floor((d2F - d1F)) / (1000 * 60 * 60 * 24);
      if (currdistance == 1) { currdistance = '1 day until'}
      else if (currdistance > 1) { currdistance = Math.ceil(currdistance) + ' days until'}
      else if (currdistance == -1) { currdistance = '1 day ago'}
      else if (currdistance < -1) { currdistance = Math.ceil(Math.abs(currdistance)) + ' days ago'}
      else { currdistance = 'today'}
      setDate(d2F);
      setDistance(currdistance);
    };

  const onChangeCategory = (e) => {
      setCategory(e.target.value)
    };

  const onSubmit = (e) => {
      e.preventDefault();

      const task = {
        description: description,
        date: date,
        category: category
      }

      console.log('task date on submit: ' + task.date)

      axios.post('/tasks/add', task)
        .then(res => console.log(res.data))
        .catch(err => {
          console.log(err.response.request._response);
        });

      window.location = '/';
    }

    return (
          <div>
          <form class="newTask" onSubmit={onSubmit}>
            <table>
              <tbody>
              <tr>
                <td>
            {/* Description */}
              <input type='text'
                required
                className='form-control'
                value={description}
                onChange={onChangeDescription}
                />
            </td>
            <td>
            {/* Distance */}
              <div className='form-control'>
                {distance ? distance : "today"}
              </div>
            </td>
            <td>
            {/* Date */}
              <div>
                <DatePicker
                  selected={date}
                  onChange={date => onChangeDate(date)}
                  />
              </div>
            </td>
            <td>
            {/* Category */}
              <input type='text'
                required
                className='form-control'
                value={category}
                onChange={onChangeCategory}
                />
            </td>
            <td>
            {/* Actions */}
              <input type='submit' value='add' className='btn btn-primary' />
            </td>
            </tr>
            </tbody>
            </table>
          </form>
        </div>
    )
}

export default CreateTask;