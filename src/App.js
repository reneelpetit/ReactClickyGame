import React from 'react';
import './App.css';

import Footer from './components/Footer';
import Game from './components/Game';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div>
      <Jumbotron />
      {/* <Images /> */}
      <Game />
      <Footer />
    </div>
  )
}

export default App;
