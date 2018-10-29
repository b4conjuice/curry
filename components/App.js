import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import 'babel-core/register';
import 'babel-polyfill';

import 'normalize.css';
import '../reset.css';
import AppStyles, { Curry, StatsStyles, Center } from './styles/AppStyles';
import threes from '../data/threes';

const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #006BB6;
    --gold: #fdb921;
    --gray: #f7f7f7;
  }
  html, body, #root {
    position: fixed;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
`;
const NUMBER_OF_GAMES = 82;
const sum = numbers => numbers.reduce((acc, curr) => acc + curr);
const round = number => Math.round(number * 10) / 10;
const currentTotalThrees = sum(threes);
const currentGameCount = threes.length;
const threesPerGame = round(sum(threes) / currentGameCount);
const gamesLeft = NUMBER_OF_GAMES - currentGameCount;
const onPaceFor = Math.floor(currentTotalThrees + threesPerGame * gamesLeft);

export default class App extends Component {
  state = {
    shrug: false,
  };
  toggleShrug = () =>
    this.setState(prevState => ({
      shrug: !prevState.shrug,
    }));
  render() {
    const { shrug } = this.state;
    return (
      <AppStyles shrug={shrug}>
        <GlobalStyle />
        <main>
          <p>
            <span role="img" aria-label="ok-hand">
              👌
            </span>{' '}
            <Curry href="https://twitter.com/StephenCurry30" target="_blank" rel="noopener noreferrer">
              stephen curry
            </Curry>{' '}
            has made <StatsStyles>{currentTotalThrees}</StatsStyles> threes so far this season
          </p>
          <p>
            <span role="img" aria-label="fire">
              🔥
            </span>{' '}
            across {currentGameCount} games, he is shooting <StatsStyles>{threesPerGame}</StatsStyles> threes per game{' '}
          </p>
          <p>
            <span role="img" aria-label="exploding-head">
              🤯
            </span>{' '}
            at this rate, the chef is on pace for ...
          </p>
          <div>
            <Center>
              <StatsStyles onClick={this.toggleShrug} threes>
                {onPaceFor}
              </StatsStyles>
            </Center>
          </div>
        </main>
        <footer>
          <a href="https://github.com/dlopez807/curry.git" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </footer>
      </AppStyles>
    );
  }
}
