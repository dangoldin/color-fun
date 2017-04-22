import React, { Component } from 'react';

export default class AddNewRow extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <div className='field-row'>
          <label htmlFor='red-start'>Red Start: </label><input type='text' name='red-start' />
          <label htmlFor='red-step'>Red Step: </label><input type='text' name='red-step' />
        </div>
        <div className='field-row'>
          <label htmlFor='green-start'>Green Start: </label><input type='text' name='green-start' />
          <label htmlFor='green-step'>Green Step: </label><input type='text' name='green-step' />
        </div>
        <div className='field-row'>
          <label htmlFor='blue-start'>Blue Start: </label><input type='text' name='blue-start' />
          <label htmlFor='blue-step'>Blue Step: </label><input type='text' name='blue-step' />
        </div>
        <input type='submit' value='Add' />
      </form>
    );
  }
}
