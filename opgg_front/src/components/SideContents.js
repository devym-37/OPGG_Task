import React from "react";
import styled from "styled-components";
import SoloRank from "./board/SoloRank";
import FreeRank from "./board/FreeRank";
import MostChampion from "./board/MostChampion";
import RecentWinRatio from "./board/RecentWinRatio";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 10px;
`;

const SideContents = ({ searchResult, playerMost }) => (
  <>
    <Container>
      <SoloRank searchResult={searchResult} />
      <FreeRank searchResult={searchResult} />
      <MostChampion playerMost={playerMost} />
      <RecentWinRatio playerMost={playerMost} />
    </Container>
  </>
);

export default SideContents;
