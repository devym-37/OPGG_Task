import React from "react";
import styled from "styled-components";

import PlayerMatch from "../routes/PlayerMatch";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 690px;
`;

const Box1 = styled.div`
  height: 194px;
  border: 1px solid #cdd2d2;
  margin-bottom: 16px;
  background-color: red;
`;

const MainContents = ({ playerMatch }) => (
  <>
    <Container>
      <Box1></Box1>
      {playerMatch.games.map((game) => (
        <PlayerMatch game={game} />
      ))}
    </Container>
  </>
);

export default MainContents;
