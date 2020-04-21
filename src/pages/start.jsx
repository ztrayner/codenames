import React, { useState } from 'react';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import Peer from 'peerjs';
import { GameContext } from '../contexts/game-context';

import SEO from '../components/seo';
import './index.scss';

const StartPage = () => {
  const [gameId, setGameId] = useState('');
  const [disableInput, setDisableInput] = useState(false);

  const fourRandomDigits = () => Math.floor(1000 + Math.random() * 9000);
  // ToDo - initialize with 2 random words

  const createGame = (game, setGame) => {
    setDisableInput(true);
    const generatedId = `${game.gameId}-${fourRandomDigits()}`;
    setGame({...game, gameId: generatedId, type: 'new'});

    navigate(`/game/${generatedId}`);
  };
  
  return (
    <>
      <SEO title="Codenames | Start a game" />
      <GameContext.Consumer>
        {({ game, setGame }) => (
          <>
            <input
              type="text"
              value={game.gameId}
              onChange={e => setGame({ ...game, gameId: e.target.value })}
              placeholder="Game ID"
              disabled={disableInput}
            />
            <button
              disabled={!game.gameId || game.gameId.length < 4}
              onClick={e => createGame(game, setGame)}
            >
              Let's go!
            </button>
          </>
        )}
      </GameContext.Consumer>
    </>
  );
};

export default StartPage;
