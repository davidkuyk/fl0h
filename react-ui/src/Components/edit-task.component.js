import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditTask extends Component {
  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: '',
      date: new Date(),
      category: ''
      }
    }

    componentDidMount() {
      axios.get(`/tasks/`+this.props.match.params.id)
        .then(response => {
          this.setState({
            description: response.data.description,
            date: new Date(response.data.date),
            category: response.data.category
          })
        })
        .catch(err => {
          console.log(err);
        })
    }

    onChangeDescription(e) {
      this.setState({
        description: e.target.value
      });
    };

    onChangeDate(date) {
      this.setState({
        date: date
      });
    }

    onChangeCategory(e) {
      this.setState({
        category: e.target.value
      });
    }

    onSubmit(e) {
      e.preventDefault();

      const task = {
        description: this.state.description,
        date: this.state.date,
        category: this.state.category
      }

      console.log(task);

      axios.post('/tasks/update/'+this.props.match.params.id, task)
        .then(res => console.log(res.data))
        .catch(err => {
          console.log(err.response.request._response);
        });

      window.location = '/';
    }

  render() {
    return (
      <div>
        <h3>Edit Task</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Description: </label>
            <input type='text'
              required
              className='form-control'
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
          </div>
          <div className='form-group'>
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
                />
            </div>
          </div>
          <div className='form-group'>
            <label>Category: </label>
            <input type='text'
              required
              className='form-control'
              value={this.state.category}
              onChange={this.onChangeCategory}
              />
          </div>
          <div className='form-group'>
            <input type='submit' value='Edit Task' className='btn btn-primary' />
          </div>
        </form>
      </div>
    )
  }
}