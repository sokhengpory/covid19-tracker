import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';

const App = () => {
  const [globalDatas, setGlobalDatas] = useState({});

  useEffect(() => {
    getGlobal();
  }, []);

  const getGlobal = async () => {
    const res = await axios.get('https://api.covid19api.com/summary');
    setGlobalDatas(res.data.global);
  };

  return (
    <div className="App">
      <Navbar />
      <Title />
    </div>
  );
};

export default App;
