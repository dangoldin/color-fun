import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';
import ColorRow from './components/ColorRow';
import AddNewRow from './components/AddNewRow';

require('../css/style.scss');

class ColorSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorRows: [
        // [0, 0, 0, 1, 1, 1],
        // [0, 127, 127, 1, 0, 0],
        // [127, 0, 127, 0, 1, 0],
        // [127, 127, 0, 0, 0, 1],
      ],
    };

    this.addNewColorRow = this.addNewColorRow.bind(this);
  }

  addNewColorRow(redStart, redStep, greenStart, greenStep, blueStart, blueStep) {
    const newColorRow = [
      parseFloat(redStart),
      parseFloat(greenStart),
      parseFloat(blueStart),
      parseFloat(redStep),
      parseFloat(greenStep),
      parseFloat(blueStep),
    ];

    const colorRows = this.state.colorRows;
    colorRows.push(newColorRow);

    this.setState({ colorRows });
  }

  render() {
    const ColorRows = this.state.colorRows.map((row, idx) => {
      return (
        <ColorRow
          redInitial={ row[0] }
          greenInitial={ row[1] }
          blueInitial={ row[2] }
          redStep={ row[3] }
          greenStep={ row[4] }
          blueStep={ row[5] }
        />
      );
    });

    return (
      <div className='main'>
        <div>
          <header>
            <h1>Color fun</h1>
          </header>
        </div>

        {ColorRows}

        <AddNewRow addNewColorRow={ this.addNewColorRow } />

        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <ColorSection />,
  document.getElementById('app'),
);
