import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Link } from 'gatsby';
import Peer from 'peerjs';

import Image from '../components/image';
import SEO from '../components/seo';
import './index.scss';

const IndexPage = () => (
  <>
    <SEO title="Codenames" />
    <div>
      <h2>Would you like to start a game or join one?</h2>
      <div className="button-group">
        <button onClick={() => navigate('/start')}>Start</button>
        <button onClick={() => navigate('/join')}>Join</button>
      </div>
    </div>
  </>
);

export default IndexPage;
