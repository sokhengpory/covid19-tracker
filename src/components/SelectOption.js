import { Fragment, useState } from 'react';

const SelectOption = (props) => {
  const { Country, CountryCode } = props.country;
  return (
    <Fragment>
      <option value={CountryCode} key={CountryCode}>
        {Country}
      </option>
    </Fragment>
  );
};

export default SelectOption;
