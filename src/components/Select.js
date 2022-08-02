import { useState } from 'react';

const Select = ({ getCountry, countries }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    getCountry(e.target.value);
  };

  return (
    <div>
      <form className="form">
        <select value={text} onChange={handleChange}>
          <option value="Global">Global</option>
          {countries.map((country) => (
            <option value={country.CountryCode} key={country.CountryCode}>
              {country.Country}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Select;
