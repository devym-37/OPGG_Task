import React from "react";
import styled from "styled-components";
import SideContents from "./SideContents";
import MainContents from "./MainContents";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  margin: 0 auto;
`;

const Content = ({
  searchResult,
  playerMost,
  playerMatch,
  error,
  soloRank,
  freeRank,
  tabValue,
  handleChangeTab,
}) => (
  <>
    {searchResult ? (
      <Container>
        <SideContents
          searchResult={searchResult}
          playerMost={playerMost}
          error={error}
        />
        <MainContents
          playerMatch={playerMatch}
          soloRank={soloRank}
          freeRank={freeRank}
          tabValue={tabValue}
          handleChangeTab={handleChangeTab}
          error={error}
        />
      </Container>
    ) : null}
  </>
);

export default Content;
