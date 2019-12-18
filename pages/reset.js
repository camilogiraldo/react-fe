import React from 'react';
import Reset from '../components/Reset';

const ResetPage = props => (
  <div>
    <p>reset {props.query.resetToken}</p>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default ResetPage;
