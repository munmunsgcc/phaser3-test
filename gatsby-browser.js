/*eslint-disable */

import React from 'react';

import Layout from './src/components/Layout';
import './src/styles/reset.css';
import './src/styles/global.css';
import './src/styles/fonts.css';

const wrapPageElement = ({ element: page }) => {
  return <Layout>{page}</Layout>;
};

export default {};

export { wrapPageElement };
