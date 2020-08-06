import React from "react";
import styled from "styled-components";

import PlayerMatch from "routes/PlayerMatch";
import GameStatsBox from "components/board/GameStatsBox";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 690px;
`;

const MainContents = ({
  playerMatch,
  soloRank,
  freeRank,
  tabValue,
  handleChangeTab,
  error,
}) => (
  <>
    <Container>
      <GameStatsBox
        playerMatch={playerMatch}
        tabValue={tabValue}
        handleChangeTab={handleChangeTab}
        error={error}
      />
      {tabValue === "전체"
        ? playerMatch &&
          playerMatch.games.map((game) => (
            <PlayerMatch game={game} error={error} />
          ))
        : null}
      {tabValue === "솔로"
        ? soloRank &&
          soloRank.map((game) => <PlayerMatch game={game} error={error} />)
        : null}
      {tabValue === "자유"
        ? freeRank &&
          freeRank.map((game) => <PlayerMatch game={game} error={error} />)
        : null}
    </Container>
  </>
);

export default MainContents;
