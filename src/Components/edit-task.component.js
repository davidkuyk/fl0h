import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
let dash = require('lodash');

const EditTask = props => {

  const [description, setDescription] = useState(props.task.description);
  const [date, setDate] = useState(new Date(new Date((props.task.date)).toDateString()));
  const [category, setCategory] = useState(props.task.category);
  const [distance, setDistance] = useState('today');
  
  
    const onChangeDescription = (e) => {
      setDescription(e.target.value)
    }

    const onChangeDate = (date) => {
      console.log(date);
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
      }

    const onChangeCategory = (e) => {
      setCategory(e.target.value)
    }

    const onCancel = () => {
        props.editModeChange(false, null);
    }

    const onSubmit = (e) => {
      e.preventDefault();

      const task = {
        description: description,
        date: date,
        category: category
      }

      axios.post('/tasks/update/'+props.task._id, task)
        .then(res => console.log(res.data))
        .catch(err => {
          console.log(err.response.request._response);
        });

      window.location = '/';
    }      
      return (
      <tr>
        {/* Description */}
        <td>
          <input type='text'
          required
          className='form-control'
          value={description}
          onChange={onChangeDescription}
          />
        </td>
        {/* Distance */}
        <td>
          <div className='form-control'>
            {props.distance ? props.distance : "today"}
          </div>
        </td>
        {/* Date */}
        <td>
          <div>
            <DatePicker
              selected={date}
              onChange={(date) => onChangeDate(date)}
              />
          </div>
        </td>
        {/* Category */}
        <td>
          <input type='text'
            required
            className='form-control'
            value={category}
            onChange={onChangeCategory}
            />
        </td>
        {/* Actions */}
        <td>
            <>
            <button
            className={"btn-success"}
            onClick={(e) => onSubmit(e)}
        >
            save
        </button>

        <button
            className={"btn-secondary"}
            style={{marginLeft: 8}}
            onClick={() => onCancel()}
        >
            cancel
        </button>
        </>
        </td>
      </tr>
    )}

export default EditTask;