import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Select from './components/Select';
import Footer from './components/Footer';

class App extends Component {
  state = {
    countries: [],
    countryData: [],
    country: {},
    loading: false,
    globalData: {},
  };

  componentDidMount() {
    this.getGlobal();
  }

  getGlobal = async () => {
    this.setState({ loading: true });
    const res = await axios.get('https://api.covid19api.com/summary');
    this.setState({ country: res.data.Global });
    this.setState({ globalData: res.data.Global });
    this.setState({ countries: res.data.Countries });
    this.setState({ loading: false });
  };

  getCountry = (code) => {
    if (code === 'Global') {
      this.setState({ country: this.state.globalData });
    } else {
      const country = this.state.countries.find(
        (country) => country.CountryCode === code
      );
      this.setState({ country: country });
    }
  };

  render() {
    const { loading, countries, country } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Cards loading={loading} country={country} />
          <Select countries={countries} getCountry={this.getCountry} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
