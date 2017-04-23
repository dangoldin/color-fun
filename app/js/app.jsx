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
        [0, 0, 0, 1, 1, 1],
        [0, 127, 127, 1, 0, 0],
        [127, 0, 127, 0, 1, 0],
        [127, 127, 0, 0, 0, 1],
      ],
    };
  }

  render() {
    const ColorRows = this.state.colorRows.map((row, idx) => {
      return (
        <ColorRow
          redInitial={ row[0] }
          blueInitial={ row[1] }
          greenInitial={ row[2] }
          redStep={ row[3] }
          blueStep={ row[4] }
          greenStep={ row[5] }
          key={ idx }
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

        <AddNewRow />

        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <ColorSection />,
  document.getElementById('app'),
);
