import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Router, useParams, navigate } from '@reach/router';
import { GameContext } from '../contexts/game-context';

import SEO from '../components/seo';
import './index.scss';

const JoinPage = () => {
  const params = useParams();

  const joinGame = (game, setGame) => {
    // set game context values for connection on game page and then navigate to game page
    setGame({...game, type: 'connecting'});
    navigate(`/game/${game.gameId}`);
  };

  return (
    <>
      <SEO title="Codenames | Join" />
      <GameContext.Consumer>
        {({ game, setGame }) => (
          <>
            <input
              type="text"
              value={game.gameId}
              onChange={e => setGame({ ...game, gameId: e.target.value })}
              placeholder="Game ID"
            />
            <button
              disabled={!game.gameId || game.gameId.length < 4}
              onClick={e => joinGame(game, setGame)}
            >
              Let's go!
            </button>
          </>
        )}
      </GameContext.Consumer>
    </>
  );
};

export default JoinPage;
