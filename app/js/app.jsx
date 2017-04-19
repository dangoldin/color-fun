import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';

require('../css/style.scss');

ReactDOM.render(
  <div className='main'>
    <div>
      <header>
        <h1>Color fun</h1>
      </header>
    </div>

    <Footer />
  </div>,
  document.getElementById('app'),
);
