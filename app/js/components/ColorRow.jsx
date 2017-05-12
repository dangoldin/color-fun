import React, { Component } from 'react';

import PropTypes from 'prop-types';

import ColorStrip from './ColorStrip';

const MaxColor = 255;
const MaxSteps = 500;

export default class ColorRow extends Component {
  render() {
    const Row = [];

    let red = this.props.redInitial;
    let blue = this.props.blueInitial;
    let green = this.props.greenInitial;

    const rStep = this.props.redStep;
    const gStep = this.props.greenStep;
    const bStep = this.props.blueStep;

    const numSteps = Math.min(
      MaxSteps,
      MaxColor / Math.min(
        Math.abs(rStep) || MaxSteps,
        Math.abs(gStep) || MaxSteps,
        Math.abs(bStep) || MaxSteps,
      ),
    );

    debugger;

    let i = 0;
    while (i < numSteps) {
      Row.push(<ColorStrip red={ red } green={ green } blue={ blue } />);

      red += rStep;
      green += gStep;
      blue += bStep;

      i += 1;
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
