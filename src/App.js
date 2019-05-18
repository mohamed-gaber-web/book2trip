import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Home from './components/Home/Home';
import Navbar from './components/navbar/navbar';
import Footer from './components/Footer/Footer';
import Routing from './Routing/route';


class App extends Component {

  render() {
    return (
      <div>

        <BrowserRouter>
          <Navbar />
          <Routing />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
