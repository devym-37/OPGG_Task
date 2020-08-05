import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GameStats from "components/matchInfo/GameStats";
import GameSettingsInfo from "components/matchInfo/GameSettingsInfo";
import KDA from "components/matchInfo/KDA";
import Stats from "components/matchInfo/Stats";
import Items from "components/matchInfo/Items";
import FollowPlayers from "components/matchInfo/FollowPlayers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 96px;
  margin-bottom: 8px;
  font-family: Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic,
    Dotum, Arial, Tahoma;
`;

const GameContainer = styled.div`
  position: relative;
  background: none;
`;

const Content = styled.div`
  display: table;
  width: 689px;
  border-collapse: collapse;
  border: 1px solid #cdd2d2;
  table-layout: fixed;

  background-color: ${(props) => (props.gameResult ? "#a3cfec" : "#e2b6b3")};
  /* #a3cfec; */
  border-color: ${(props) => (props.gameResult ? "#99b9cf" : "#cea7a7")};
  /* #99b9cf; */
  /* 패배
  background-color: #e2b6b3;
  border-color: #cea7a7; */
`;

const StateButton = styled.div`
  /* 승리 */
  /* border-color: ${(props) => (props.gameResult ? "#549dc7" : "#c8817c")}; */

  background: ${(props) => (props.gameResult ? "#7fb0e1" : "#e89c95")};

  /* 패배 */
  /* border-color: #d67b77;
    background: #e89d99; */
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  width: 30px;
  border: 1px solid ${(props) => (props.gameResult ? "#549dc7" : "#c8817c")};
`;
const StateContent = styled.div`
  position: relative;
  width: 30px;
  height: 96px;
`;
const StateItem = styled.div`
  position: absolute;
  left: -1px;
  top: -1px;
  width: 30px;
  height: 100%;
`;
const RightMatch = styled.a`
  text-align: center;
  text-decoration: none;
  outline: none;
  display: block;
  width: 30px;
  position: relative;
  cursor: pointer;
  height: 100%;
`;
const Button = styled.span`
  display: block;
  position: absolute;
  bottom: 10px;
  left: 9px;
  background-position: -127px -3840px;
  width: 13px;
  height: 10px;
  background-image: url("https://opgg-static.akamaized.net/assets/site.png?image=q_auto&v=1595653530");
`;

const PlayerMatchPresenter = ({
  gameMatch,
  matchUsers,
  gameDate,
  gameTime,
  champion,
  userName,
  loading,
  error,
}) => (
  <>
    <Container>
      <GameContainer>
        <Content gameResult={gameMatch.isWin}>
          <GameStats
            gameType={gameMatch.gameType}
            gameDate={gameDate}
            gameTime={gameTime}
            gameResult={gameMatch.isWin}
          />

          <GameSettingsInfo
            image={gameMatch.champion.imageUrl}
            champion={champion}
            spells={gameMatch.spells}
            runes={gameMatch.peak}
          />

          <KDA kdaInfo={gameMatch.stats.general} />

          <Stats
            kdaInfo={gameMatch.stats.general}
            level={gameMatch.champion.level}
          />

          <Items
            items={gameMatch.items}
            ward={gameMatch.stats.ward}
            gameResult={gameMatch.isWin}
          />

          <FollowPlayers teams={matchUsers} userName={userName} />

          <StateButton gameResult={gameMatch.isWin}>
            <StateContent>
              <StateItem>
                <RightMatch href="#">
                  <Button></Button>
                </RightMatch>
              </StateItem>
            </StateContent>
          </StateButton>
        </Content>
      </GameContainer>
    </Container>
  </>
);

PlayerMatchPresenter.propTypes = {
  gameMatch: PropTypes.object,
  matchUsers: PropTypes.object,
  gameDate: PropTypes.string,
  gameTime: PropTypes.string,
  champion: PropTypes.string,
  userName: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default PlayerMatchPresenter;
