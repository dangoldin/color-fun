import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class ColorStrip extends Component {
  render() {
    const rgbString = `rgb( ${this.props.red}, ${this.props.green}, ${this.props.blue})`;

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
