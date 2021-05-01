import { useState } from 'react';

const Select = (props) => {
  const [text, setText] = useState('Global');

  const handleChange = (e) => {
    setText(e.target.value);
    props.getCountry(e.target.value);
  };

  return (
    <div>
      <form>
        <select value={text} onChange={handleChange}>
          <option value="Global">Global</option>
          {props.countries.map((country) => (
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
