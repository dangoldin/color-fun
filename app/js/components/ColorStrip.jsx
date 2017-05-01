import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class ColorStrip extends Component {
  render() {
    const red = Math.round(this.props.red);
    const green = Math.round(this.props.green);
    const blue = Math.round(this.props.blue);

    const rgbString = `rgb( ${red}, ${green}, ${blue})`;

    const style = {
      backgroundColor: rgbString,
    };

    return (
      <span className='color-strip' style={ style }>
        &nbsp;
      </span>
    );
  }
}

ColorStrip.propTypes = {
  red: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
};
