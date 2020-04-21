import React from 'react';

const GameContext = React.createContext({
    peer: {},
    gameId: '',
    type: 'new', /* 'new' or 'connecting' */
    data: {}
});

export { GameContext };