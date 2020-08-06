import React from "react";
import styled from "styled-components";

import PlayerMatch from "routes/PlayerMatch";
import GameStatsBox from "components/board/GameStatsBox";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 690px;
`;

const MainContents = ({ playerMatch }) => (
  <>
    <Container>
      <GameStatsBox />
      {playerMatch.games.map((game) => (
        <PlayerMatch game={game} />
      ))}
    </Container>
  </>
);

export default MainContents;
