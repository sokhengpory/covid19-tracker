import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Cards from './components/Cards';

class App extends Component {
  state = {
    globalDatas: {},
  };

  componentDidMount() {
    this.getGlobal();
  }

  getGlobal = async () => {
    const res = await axios.get('https://api.covid19api.com/summary');
    this.setState({ globalDatas: res.data.Global });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Title />
        <Cards globalDatas={this.state.globalDatas} />
      </div>
    );
  }
}

export default App;
