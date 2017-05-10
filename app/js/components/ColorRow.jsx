import React, { Component } from 'react';

import PropTypes from 'prop-types';

import ColorStrip from './ColorStrip';

const MaxColor = 255;

export default class ColorRow extends Component {
  render() {
    const Row = [];

    let red = this.props.redInitial;
    let blue = this.props.blueInitial;
    let green = this.props.greenInitial;

    let i = 0;
    while (i < 500 && (
        (this.props.redStep !== 0 && red < MaxColor)
        || (this.props.greenStep !== 0 && green < MaxColor)
        || (this.props.blueStep !== 0 && blue < MaxColor))
      ) {
      Row.push(<ColorStrip red={ red } green={ green } blue={ blue } />);

      red += this.props.redStep;
      green += this.props.greenStep;
      blue += this.props.blueStep;

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
