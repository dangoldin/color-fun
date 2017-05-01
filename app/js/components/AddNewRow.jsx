import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ColorRow from './ColorRow';

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
    this.randomRow = this.randomRow.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const redStart = this.state.redStart;
    const greenStart = this.state.greenStart;
    const blueStart = this.state.blueStart;
    const redStep = this.state.redStep;
    const greenStep = this.state.greenStep;
    const blueStep = this.state.blueStep;

    if (this.getColorRowIfValid()) {
      this.props.addNewColorRow(redStart, redStep, greenStart, greenStep, blueStart, blueStep);

      // this.setState({
      //   redStart: '',
      //   redStep: '',
      //   blueStart: '',
      //   blueStep: '',
      //   greenStart: '',
      //   greenStep: '',
      // });
    }
  }

  getColorRowIfValid() {
    if (
      this.state.redStart && this.state.redStep &&
      this.state.greenStart && this.state.greenStep &&
      this.state.blueStart && this.state.blueStep
    ) {
      return (
        <ColorRow
          redInitial={ parseFloat(this.state.redStart) }
          redStep={ parseFloat(this.state.redStep) }
          greenInitial={ parseFloat(this.state.greenStart) }
          greenStep={ parseFloat(this.state.greenStep) }
          blueInitial={ parseFloat(this.state.blueStart) }
          blueStep={ parseFloat(this.state.blueStep) }
        />
      );
    }
    return null;
  }

  randomRow(e) {
    e.preventDefault();

    const redStart = Math.round(Math.random() * 255);
    const greenStart = Math.round(Math.random() * 255);
    const blueStart = Math.round(Math.random() * 255);

    const redStep = Math.round(Math.random() * 10);
    const greenStep = Math.round(Math.random() * 10);
    const blueStep = Math.round(Math.random() * 10);

    this.setState({
      redStart,
      greenStart,
      blueStart,
      redStep,
      greenStep,
      blueStep,
    });
  }


  handleFieldChange(e) {
    const newVals = {};
    newVals[e.target.name] = e.target.value;
    this.setState(newVals);
  }

  render() {
    const ThisColorRow = this.getColorRowIfValid() || '';

    return (
      <div>
        { ThisColorRow }
        <form className='add-new-row' onSubmit={ this.onSubmit }>

          <div className='field-row'>
            <label htmlFor='redStart'>Red Start: </label>
            <input
              type='text' name='redStart'
              value={ this.state.redStart } onChange={ this.handleFieldChange }
            />

            <label htmlFor='redStep'>Red Step: </label>
            <input
              type='text' name='redStep'
              value={ this.state.redStep } onChange={ this.handleFieldChange }
            />
          </div>
          <div className='field-row'>
            <label htmlFor='greenStart'>Green Start: </label>
            <input
              type='text' name='greenStart'
              value={ this.state.greenStart } onChange={ this.handleFieldChange }
            />
            <label htmlFor='greenStep'>Green Step: </label>
            <input
              type='text' name='greenStep'
              value={ this.state.greenStep } onChange={ this.handleFieldChange }
            />
          </div>
          <div className='field-row'>
            <label htmlFor='blueStart'>Blue Start: </label>
            <input
              type='text' name='blueStart'
              value={ this.state.blueStart } onChange={ this.handleFieldChange }
            />

            <label htmlFor='blueStep'>Blue Step: </label>
            <input
              type='text' name='blueStep'
              value={ this.state.blueStep } onChange={ this.handleFieldChange }
            />
          </div>
          <button type='submit'>Add</button>
          <button onClick={ this.randomRow }>Random</button>
        </form>
      </div>
    );
  }
}

AddNewRow.propTypes = {
  addNewColorRow: PropTypes.func.isRequired,
};
