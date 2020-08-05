import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  width: 70px;
  text-align: center;
  font-size: 11px;
  color: #555;
  line-height: 16px;
`;
const GameType = styled.div`
  font-family: AppleSDGothicNeo-Bold;
  font-weight: bold;
  width: 70px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const TimeStamp = styled.div``;
const Day = styled.span``;
const Bar = styled.div`
  display: block;
  width: 27px;
  margin: 5px auto;
  height: 2px;
  background: ${(props) => (props.gameResult ? "#99b9cf" : "#cea7a7")};
`;
const GameResult = styled.div`
  font-family: AppleSDGothicNeo-Bold;
  font-weight: bold;
  color: ${(props) => (props.gameResult ? "#2c709b" : "#d0021b")};
`;
const GameLength = styled.div``;

const GameStats = ({ gameType, gameDate, gameTime, gameResult }) => (
  <>
    <Container>
      <GameType>{gameType}</GameType>
      <TimeStamp>
        <Day>{gameDate}</Day>
      </TimeStamp>
      <Bar gameResult={gameResult}></Bar>
      <GameResult gameResult={gameResult}>
        {gameResult ? "승리" : "패배"}
      </GameResult>
      <GameLength>{gameTime}</GameLength>
    </Container>
  </>
);

GameStats.propTypes = {
  gameType: PropTypes.string,
  gameDate: PropTypes.string,
  gameResult: PropTypes.bool,
  gameTime: PropTypes.string,
};

export default GameStats;
