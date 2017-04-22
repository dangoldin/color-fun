import React from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';
import ColorRow from './components/ColorRow';
import AddNewRow from './components/AddNewRow';

require('../css/style.scss');

const ColorRows = [
  <ColorRow
    redInitial={ 0 }
    blueInitial={ 0 }
    greenInitial={ 0 }
    redStep={ 1 }
    blueStep={ 1 }
    greenStep={ 1 }
  />,
  <ColorRow
    redInitial={ 0 }
    blueInitial={ 127 }
    greenInitial={ 127 }
    redStep={ 1 }
    blueStep={ 0 }
    greenStep={ 0 }
  />,
  <ColorRow
    redInitial={ 127 }
    blueInitial={ 0 }
    greenInitial={ 127 }
    redStep={ 0 }
    blueStep={ 1 }
    greenStep={ 0 }
  />,
  <ColorRow
    redInitial={ 127 }
    blueInitial={ 127 }
    greenInitial={ 0 }
    redStep={ 0 }
    blueStep={ 0 }
    greenStep={ 1 }
  />,
];

ReactDOM.render(
  <div className='main'>
    <div>
      <header>
        <h1>Color fun</h1>
      </header>
    </div>

    {ColorRows}

    <AddNewRow />

    <Footer />
  </div>,
  document.getElementById('app'),
);
