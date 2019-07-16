import React from 'react';

import { Link } from 'gatsby';
import PhaserJS from '../components/PhaserJS';

const SecondPage = () => (
  <>
    <PhaserJS />
    <Link to="/">Go back</Link>
  </>
);

export default SecondPage;
