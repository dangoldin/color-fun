import React from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';
import ColorStrip from './components/ColorStrip';

require('../css/style.scss');

const List = [
  [],
  <hr />,
  [],
  <hr />,
  [],
  <hr />,
  [],
];

const MaxColor = 255;

for (let i = 0; i < MaxColor; i += 1) {
  List[0].push(<ColorStrip red={ i } green={ i } blue={ i } />);
  List[2].push(<ColorStrip red={ i } green={ 127 } blue={ 127 } />);
  List[4].push(<ColorStrip red={ 127 } green={ i } blue={ 127 } />);
  List[6].push(<ColorStrip red={ 127 } green={ 127 } blue={ i } />);
}

ReactDOM.render(
  <div className='main'>
    <div>
      <header>
        <h1>Color fun</h1>
      </header>
    </div>

    {List}

    <Footer />
  </div>,
  document.getElementById('app'),
);
