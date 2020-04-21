import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Router, useParams } from '@reach/router';

import Peer from 'peerjs';

import Game from '../components/game';
import './index.scss';

const GamePage = () => (
  <Router>
    <Game path="game/:gameId" />
  </Router>
);

export default GamePage;
