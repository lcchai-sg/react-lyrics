import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: '40px auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
