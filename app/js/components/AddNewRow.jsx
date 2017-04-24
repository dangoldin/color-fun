import React, { Component } from 'react';

export default class AddNewRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redStart: '',
      redStep: '',
      blueStart: '',
      blueStep: '',
      greenStart: '',
      greenStep: '',
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const redStart = this.state.redStart;
    const greenStart = this.state.greenStart;
    const blueStart = this.state.blueStart;
    const redStep = this.state.redStep;
    const greenStep = this.state.greenStep;
    const blueStep = this.state.blueStep;

    this.props.addNewColorRow(redStart, redStep, greenStart, greenStep, blueStart, blueStep);
  }

  handleFieldChange(e) {
    const newVals = {};
    newVals[e.target.name] = e.target.value;
    this.setState(newVals);
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <div className='field-row'>
          <label htmlFor='redStart'>Red Start: </label>
          <input type='text' name='redStart' value={ this.state.redStart } onChange={ this.handleFieldChange } />

          <label htmlFor='redStep'>Red Step: </label>
          <input type='text' name='redStep' value={ this.state.redStep } onChange={ this.handleFieldChange } />
        </div>
        <div className='field-row'>
          <label htmlFor='greenStart'>Green Start: </label>
          <input type='text' name='greenStart' value={ this.state.greenStart } onChange={ this.handleFieldChange } />

          <label htmlFor='greenStep'>Green Step: </label>
          <input type='text' name='greenStep' value={ this.state.greenStep } onChange={ this.handleFieldChange } />
        </div>
        <div className='field-row'>
          <label htmlFor='blueStart'>Blue Start: </label>
          <input type='text' name='blueStart' value={ this.state.blueStart } onChange={ this.handleFieldChange } />

          <label htmlFor='blueStep'>Blue Step: </label>
          <input type='text' name='blueStep' value={ this.state.blueStep } onChange={ this.handleFieldChange } />
        </div>
        <input type='submit' value='Add' />
      </form>
    );
  }
}
