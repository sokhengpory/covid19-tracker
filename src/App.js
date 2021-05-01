import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

class App extends Component {
  state = {
    globalDatas: {},
    loading: false,
  };

  componentDidMount() {
    this.getGlobal();
  }

  getGlobal = async () => {
    this.setState({ loading: true });
    const res = await axios.get('https://api.covid19api.com/summary');
    this.setState({ globalDatas: res.data.Global });
    this.setState({ loading: false });
  };

  render() {
    const { globalDatas, loading } = this.state;

    return (
      <div className="App">
        <Navbar />
        <Cards globalDatas={globalDatas} loading={loading} />
      </div>
    );
  }
}

export default App;
