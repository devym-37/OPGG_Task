import React from "react";
import styled from "styled-components";
import SoloRank from "./board/SoloRank";
import FreeRank from "./board/FreeRank";
import MostChampion from "./board/MostChampion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 10px;
`;

const Box3 = styled.div`
  height: 415px;
  border: 1px solid #cdd2d2;
  margin-bottom: 45px;
  background-color: green;
`;

const Box4 = styled.div`
  height: 188px;
  border: 1px solid #cdd2d2;
  margin-bottom: 45px;
  background-color: yellow;
`;

const SideContents = ({ searchResult, playerMost }) => (
  <>
    <Container>
      <SoloRank searchResult={searchResult} />
      <FreeRank searchResult={searchResult} />
      <MostChampion playerMost={playerMost} />
      <Box4></Box4>
    </Container>
  </>
);

export default SideContents;
