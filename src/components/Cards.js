import { Fragment } from 'react';
import Spinner from './Spinner';

const Cards = (props) => {
  const {
    NewConfirmed,
    NewDeaths,
    TotalConfirmed,
    TotalDeaths,
    Date: CurrentDate,
    Country,
  } = props.country;

  function numberWithCommas(x) {
    if (!x) return 0;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const newDate = new Date(CurrentDate);
  const date = newDate.toDateString();
  const time = newDate.toLocaleTimeString();

  if (props.loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className="title">
        <h3>{!Country ? 'Global' : Country}</h3>
        <p>{`${date} | ${time}`}</p>
      </div>
      <div className="cards">
        <div className="card">
          <h2>Cases</h2>
          <div className="text-wrap">
            <p>
              New Case: <span>{numberWithCommas(NewConfirmed)}</span>
            </p>
            <p>
              Total Case: <span>{numberWithCommas(TotalConfirmed)}</span>
            </p>
          </div>
        </div>
        <div className="card">
          <h2>Deaths</h2>
          <div className="text-wrap">
            <p>
              New Death: <span>{numberWithCommas(NewDeaths)}</span>
            </p>
            <p>
              Total Death: <span>{numberWithCommas(TotalDeaths)}</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
