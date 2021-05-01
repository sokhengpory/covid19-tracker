import React from 'react';
import moment from 'moment';

const Title = (props) => {
  const { Date } = props.globalDatas;
  return (
    <div className="title">
      <h3>Global</h3>
      <p>{moment(Date).format('MMMM Do YYYY, h:mm a')}</p>
    </div>
  );
};

export default Title;
