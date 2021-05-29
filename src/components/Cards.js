import { Fragment } from 'react';
import moment from 'moment';
import Spinner from './Spinner';

const Cards = (props) => {
  const {
    NewConfirmed,
    NewDeaths,
    TotalConfirmed,
    TotalDeaths,
    Date,
    Country,
  } = props.country;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className="title">
          <h3>{!Country ? 'Global' : props.country.Country}</h3>
          <p>{moment(Date).format('MMMM Do YYYY, h:mm a')}</p>
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
  }
};

export default Cards;
