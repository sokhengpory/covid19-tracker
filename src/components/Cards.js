import React from 'react';
import moment from 'moment';
import Spinner from './Spinner';

const Cards = (props) => {
  const {
    NewConfirmed,
    NewDeaths,
    TotalConfirmed,
    TotalDeaths,
    Date,
  } = props.globalDatas;

  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div className="container">
        <div className="title">
          <h3>Global</h3>
          <p>{moment(Date).format('MMMM Do YYYY, h:mm a')}</p>
        </div>
        <div className="cards">
          <div className="card">
            <h2>Cases</h2>
            <div className="text-wrap">
              <p>
                New Case: <span>{NewConfirmed}</span>
              </p>
              <p>
                Total Case: <span>{TotalConfirmed}</span>
              </p>
            </div>
          </div>
          <div className="card">
            <h2>Deaths</h2>
            <div className="text-wrap">
              <p>
                New Death: <span>{NewDeaths}</span>
              </p>
              <p>
                Total Death: <span>{TotalDeaths}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cards;
