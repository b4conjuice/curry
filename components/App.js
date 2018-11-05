import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import sanityClient from '@sanity/client';

import 'babel-core/register';
import 'babel-polyfill';

import 'normalize.css';
import '../reset.css';
import AppStyles, { Curry, StatsStyles, Center } from './styles/AppStyles';
import Loading from './Loading';

const client = sanityClient({
  projectId: 'emdfcp21',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
});

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
const sum = numbers => numbers.reduce((acc, curr) => acc + curr, 0);
const round = number => Math.round(number * 10) / 10;

export default class App extends Component {
  state = {
    shrug: false,
    threes: [],
    loading: true,
  };
  componentDidMount = () => {
    const threes = JSON.parse(localStorage.getItem('threes')) || [];
    const loading = threes.length === 0;
    this.setState({
      threes,
      loading,
    });
    client.fetch('*[_type == "three"] {threes}').then(response => {
      const newThrees = response.map(three => three.threes);
      localStorage.setItem('threes', JSON.stringify(newThrees));
      if (this.state.loading)
        this.setState({
          threes: newThrees,
          loading: false,
        });
    });
  };

  toggleShrug = () =>
    this.setState(prevState => ({
      shrug: !prevState.shrug,
    }));

  render() {
    const { shrug, threes, loading } = this.state;
    const currentGameCount = threes.length;
    const currentTotalThrees = sum(threes);
    const threesPerGame = currentGameCount === 0 ? 0 : round(sum(threes) / currentGameCount);
    const gamesLeft = NUMBER_OF_GAMES - currentGameCount;
    const onPaceFor = Math.floor(currentTotalThrees + threesPerGame * gamesLeft);
    return (
      <AppStyles shrug={shrug}>
        <GlobalStyle />
        {loading ? (
          <Loading />
        ) : (
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
        )}
        <footer>
          <a href="https://github.com/dlopez807/curry.git" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </footer>
      </AppStyles>
    );
  }
}
