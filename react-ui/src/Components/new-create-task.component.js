import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: '',
      date: new Date(),
      category: 'None',
      }
    }

    onChangeDescription(e) {
      this.setState({
        description: e.target.value
      });
    };

    onChangeDate(date) {
      let currdistance = Number((new Date(date).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24));
      if (currdistance > 0) { currdistance = Math.ceil(currdistance) + ' days until'}
      else if (currdistance < 0) { currdistance = Math.ceil(Math.abs(currdistance)) + ' days ago'}
      else { currdistance = 'today'}
      this.setState({
        date: date,
        distance: currdistance
      });
    };

    onChangeCategory(e) {
      this.setState({
        category: e.target.value
      });
    };

    onSubmit(e) {
      e.preventDefault();

      const task = {
        description: this.state.description,
        date: this.state.date,
        category: this.state.category
      }

      console.log(task);

      axios.post('/tasks/add', task)
        .then(res => console.log(res.data))
        .catch(err => {
          console.log(err.response.request._response);
        });

      window.location = '/';
    }

  render() {
    return (
          <div>
          <form class="newTask" onSubmit={this.onSubmit}>
            <table>
              <tbody>
              <tr>
                <td>
            {/* Description */}
              <input type='text'
                required
                className='form-control'
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
            </td>
            <td>
            {/* Distance */}
              <div className='form-control'>
                {this.state.distance ? this.state.distance : "?"}
              </div>
            </td>
            <td>
            {/* Date */}
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                  />
              </div>
            </td>
            <td>
            {/* Category */}
              <input type='text'
                required
                className='form-control'
                value={this.state.category}
                onChange={this.onChangeCategory}
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
}