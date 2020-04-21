import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { ThemeContext, themes } from '../contexts/theme-context';
import { GameContext } from '../contexts/game-context';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [theme, setTheme] = useState(themes.dark);
  const [game, setGame] = useState({
    peer: {},
    gameId: '',
    type: 'new', // 'new' or 'connecting'
    data: {}
  });
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <GameContext.Provider value={{ game, setGame }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: '2rem'
            }}
          >
            © {new Date().getFullYear()} Built by
            {` `}
            <a href="https://zachtrayner.com" target="_blank">
              Zach Trayner
            </a>
            {` `}
            <span onClick={toggleTheme}>Change Theme</span>
          </footer>
        </div>
      </GameContext.Provider>
    </ThemeContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
