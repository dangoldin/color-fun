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

    for (let i = 0; i < MaxColor; i += 1) {
      Row.push(<ColorStrip red={ red } blue={ blue } green={ green } />);

      red += this.props.redStep;
      blue += this.props.blueStep;
      green += this.props.greenStep;
    }

    return (
      <div>
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
