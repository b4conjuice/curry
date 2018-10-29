import styled from 'styled-components';
import shrug from '../../shrug.jpg';

const AppStyles = styled.div`
  font-family: Arial;
  height: 100%;
  width: 100%;
  background: var(--blue);
  background-image: ${props => (props.shrug ? `url(${shrug})` : '')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  header,
  main,
  footer {
    box-sizing: border-box;
  }

  header,
  footer {
    font-size: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header {
    height: 15%;
  }

  main {
    color: var(--gray);
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    height: 95%;
    padding: 4vw;
    font-size: 4vw;

    p {
      margin-bottom: 40px;
      line-height: 1.15;
    }
  }

  footer {
    height: 5%;
    color: var(--gold);
    background: var(--blue);
    display: flex;
    justify-content: flex-end;
    padding: 0 10px;

    a {
      color: var(--gold);
      font-size: 2.5vw;
    }
  }
`;

export const StatsStyles = styled.span`
  color: var(--gold);
  font-weight: bold;
  font-size: ${props => (props.threes ? '10vw' : 'inherit')};
  ${props => (props.threes ? 'cursor: pointer' : '')};
  &:hover {
    ${props => (props.threes ? 'text-shadow: 2px 4px 3px #242424' : '')};
  }
`;

export const Center = styled.div`
  text-align: center;
`;

export const Curry = styled.a`
  color: var(--gold);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-shadow: 2px 4px 3px #242424;
  }
`;

export default AppStyles;
