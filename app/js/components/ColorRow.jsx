import React, { Component } from 'react';

import PropTypes from 'prop-types';

import ColorStrip from './ColorStrip';

const MaxColor = 255;
const MaxSteps = 255;

export default class ColorRow extends Component {
  render() {
    const Row = [];

    let red = this.props.redInitial;
    let blue = this.props.blueInitial;
    let green = this.props.greenInitial;

    // Figure this out based on min step size but cap it
    const steps = Math.min(MaxSteps, MaxColor / Math.min(Math.abs(red), Math.abs(green), Math.abs(blue)));

    for (let i = 0; i < steps; i += 1) {
      Row.push(<ColorStrip red={ red } blue={ blue } green={ green } key={ i } />);

      red += this.props.redStep;
      blue += this.props.blueStep;
      green += this.props.greenStep;
    }

    return (
      <div className='color-row'>
        {Row}
      </div>
    );
  }
}

ColorRow.propTypes = {
  redInitial: PropTypes.number.isRequired,
  blueInitial: PropTypes.number.isRequired,
  greenInitial: PropTypes.number.isRequired,
  redStep: PropTypes.number.isRequired,
  blueStep: PropTypes.number.isRequired,
  greenStep: PropTypes.number.isRequired,
};
