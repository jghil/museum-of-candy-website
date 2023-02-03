import React from 'react';
import Home from './components/home';
import Navbar from './components/navbar';

export default class App extends React.Component {
  render() {
    return (
      <div className="background-color">
        <Navbar />
        <Home />
      </div>
    );
  }
}
