import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Images from './components/images';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Images />
      <Footer />
    </div>
  )
}

export default App;
