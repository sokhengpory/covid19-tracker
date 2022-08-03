import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Select from './components/Select';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(false);
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    getGlobal();
  }, []);

  async function getGlobal() {
    setLoading(true);

    const res = await fetch('https://api.covid19api.com/summary');
    const data = await res.json();

    setCountries(data.Countries);
    setCountry(data.Global);
    setLoading(false);
    setGlobalData(data.Global);
  }

  function getCountry(code) {
    console.log(code);
    if (code === 'Global') {
      setCountry(globalData);
    } else {
      const countryData = countries.find(
        (country) => country.CountryCode === code
      );
      setCountry(countryData);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Cards loading={loading} country={country} />
        <Select countries={countries} getCountry={getCountry} />
      </div>
    </div>
  );
}

export default App;
