import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 98px;
  border: 1px solid #cdd2d2;
  margin-bottom: 8px;
  background-color: #f2f2f2;
  padding: 16px 0;
  display: flex;
  align-items: center;
`;

const FreeContainer = styled.div`
  height: 64px;
  display: flex;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 28px;
`;

const TierRankInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  font-family: Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic,
    Dotum, Arial, Tahoma;
`;

const RankType = styled.div`
  font-size: 11px;
  color: #879292;
`;

const UnRankType = styled.div`
  font-size: 11px;
  color: #879292;
  margin-bottom: 4px;
`;

const TierRank = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #1f8ecd;
`;

const TierInfo = styled.div`
  display: block;
`;

const LeaguePoints = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #555e5e;
`;

const Results = styled.span`
  font-size: 12px;
  color: #879292;
`;

const WinRatio = styled.div`
  font-size: 12px;
  color: #879292;
`;

const Unranked = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #879292;
`;

const FreeUnRanked = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FreeRank = ({ searchResult }) => {
  const freeRank = searchResult.leagues[1];
  const winRatio = Math.round(
    (freeRank.wins / (freeRank.wins + freeRank.losses)) * 100
  );
  return (
    <>
      {!freeRank.hasResults ? (
        <Container>
          <FreeContainer>
            <Img src={freeRank.tierRank.imageUrl} />
            <TierRankInfo>
              <RankType>{freeRank.tierRank.name}</RankType>
              <TierRank>{`${freeRank.tierRank.string}`}</TierRank>
              <TierInfo>
                <LeaguePoints>
                  {`${freeRank.tierRank.lp} LP `}
                  <Results>{`/ ${freeRank.wins}승 ${freeRank.losses}패`}</Results>
                </LeaguePoints>
                <WinRatio>{`승률 ${winRatio}%`}</WinRatio>
              </TierInfo>
            </TierRankInfo>
          </FreeContainer>
        </Container>
      ) : (
        <Container>
          <FreeContainer>
            <Img src="https://opgg-static.akamaized.net/images/medals/default.png" />
            <FreeUnRanked>
              <UnRankType>{freeRank.tierRank.name}</UnRankType>
              <Unranked>Unranked</Unranked>
            </FreeUnRanked>
          </FreeContainer>
        </Container>
      )}
    </>
  );
};

export default FreeRank;
