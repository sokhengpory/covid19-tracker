import React from 'react';

const Cards = (props) => {
  const {
    NewConfirmed,
    NewDeaths,
    TotalConfirmed,
    TotalDeaths,
  } = props.globalDatas;

  return (
    <div className="container">
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
};

export default Cards;
