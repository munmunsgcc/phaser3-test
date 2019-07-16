import React from 'react';
import { Link } from 'gatsby';

import PhaserJS from '../components/PhaserJS';

const IndexPage = () => (
  <>
    <PhaserJS />
    <Link to="/second">Next game</Link>
  </>
);

export default IndexPage;
