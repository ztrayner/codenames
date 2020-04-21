import React, { useState, useEffect } from 'react';
import { navigate, useParams } from '@reach/router';
import { Link } from 'gatsby';
import Peer from 'peerjs';
import { GameContext } from '../contexts/game-context';

import '../pages/index.scss';

const Game = () => {
  const params = useParams();
  const [paramGameId, setParamGameId] = useState(params && params.gameId);


  return (
    <>
      <GameContext.Consumer>
        {({ game, setGame }) => (
          <div>
            <h2>Your Game ID is: {paramGameId}</h2>
            <p>{JSON.stringify(game)}</p>
          </div>
        )}
      </GameContext.Consumer>
    </>
  );
};

export default Game;
