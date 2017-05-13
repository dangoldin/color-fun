import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ColorRow from './ColorRow';

const MaxColor = 255;

function roundToDecimalPlaces(num, decimalPlaces) {
  return Math.round(num * (10 ** decimalPlaces)) / (10 ** decimalPlaces);
}

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
    this.randomRowAndAdd = this.randomRowAndAdd.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.addRow();
  }

  getColorRowIfValid() {
    if (isNaN(this.state.redStart) ||
      isNaN(this.state.greenStart) ||
      isNaN(this.state.blueStart) ||
      isNaN(this.state.redStep) ||
      isNaN(this.state.greenStep) ||
      isNaN(this.state.blueStep)) {
      return null;
    }

    // At least one step is non zero
    if (Math.abs(this.state.redStep) === 0 &&
      Math.abs(this.state.greenStep) === 0 &&
      Math.abs(this.state.blueStep) === 0) {
      return null;
    }

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

  addRow() {
    const redStart = this.state.redStart;
    const greenStart = this.state.greenStart;
    const blueStart = this.state.blueStart;
    const redStep = this.state.redStep;
    const greenStep = this.state.greenStep;
    const blueStep = this.state.blueStep;

    if (this.getColorRowIfValid()) {
      this.props.addNewColorRow(redStart, redStep, greenStart, greenStep, blueStart, blueStep);
    }
  }

  randomRow(e) {
    if (e) {
      e.preventDefault();
    }

    const redStart = Math.round(Math.random() * 255);
    const greenStart = Math.round(Math.random() * 255);
    const blueStart = Math.round(Math.random() * 255);

    const redStep = roundToDecimalPlaces(Math.random()
      * 10 * (Math.random() > redStart / MaxColor ? 1 : -1), 2);
    const greenStep = roundToDecimalPlaces(Math.random()
      * 10 * (Math.random() > greenStart / MaxColor ? 1 : -1), -2);
    const blueStep = roundToDecimalPlaces(Math.random()
      * 10 * (Math.random() > blueStart / MaxColor ? 1 : -1), 2);

    this.setState({
      redStart,
      greenStart,
      blueStart,
      redStep,
      greenStep,
      blueStep,
    });
  }

  randomRowAndAdd(e) {
    e.preventDefault();
    this.randomRow();
    this.addRow();
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
          <button onClick={ this.randomRowAndAdd }>Random and Add</button>
        </form>
      </div>
    );
  }
}

AddNewRow.propTypes = {
  addNewColorRow: PropTypes.func.isRequired,
};
