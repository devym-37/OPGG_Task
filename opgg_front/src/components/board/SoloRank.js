import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 124px;
  border: 1px solid #cdd2d2;
  margin-bottom: 8px;
  background-color: #f2f2f2;
`;

const SoloContainer = styled.div`
  display: table;
  width: 100%;
  color: #879292;
  position: relative;
`;

const TierImage = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 120px;
  height: 124px;
  text-align: center;
`;

const Img = styled.img`
  width: 104px;
  height: 104px;
  margin: -5px 0 -10px 0;
`;

const TierRankInfo = styled.div`
  display: table-cell;
  vertical-align: middle;
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
  font-family: Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic,
    Dotum, Arial, Tahoma;
`;

const RankType = styled.div`
  font-size: 11px;
  color: #879292;
`;
const TierRank = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #1f8ecd;
`;

const TierInfo = styled.div`
  display: block;
`;

const LeaguePoints = styled.span`
  color: #555e5e;
  font-weight: bold;
`;

const WinLose = styled.span``;

const Wins = styled.span``;
const Losses = styled.span``;
const WinRatio = styled.span``;

const LeagueName = styled.div``;

const Unranked = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #879292;
`;

const SoloRank = ({ searchResult }) => {
  const soloRank = searchResult.leagues[0];
  const winRatio = Math.round(
    (soloRank.wins / (soloRank.wins + soloRank.losses)) * 100
  );
  return (
    <>
      {soloRank.hasResults ? (
        <Container>
          <SoloContainer>
            <TierImage>
              <Img src={soloRank.tierRank.imageUrl} alt="rank image" />
            </TierImage>
            <TierRankInfo>
              <RankType>
                {soloRank.tierRank.name === "솔랭" ? "솔로랭크" : null}
              </RankType>
              <TierRank>{`${soloRank.tierRank.string}`}</TierRank>
              <TierInfo>
                <LeaguePoints>{`${soloRank.tierRank.lp} LP `}</LeaguePoints>
                <WinLose>
                  <Wins>{`/ ${soloRank.wins}승 `}</Wins>
                  <Losses>{`${soloRank.losses}패`}</Losses>
                  <br />
                  <WinRatio>{`승률 ${winRatio}%`}</WinRatio>
                </WinLose>
              </TierInfo>
            </TierRankInfo>
          </SoloContainer>
        </Container>
      ) : (
        <Container>
          <SoloContainer>
            <TierImage>
              <Img
                src="https://opgg-static.akamaized.net/images/medals/default.png"
                alt="unranked image"
              />
            </TierImage>
            <TierRankInfo>
              <RankType>솔로랭크</RankType>
              <Unranked>Unranked</Unranked>
            </TierRankInfo>
          </SoloContainer>
        </Container>
      )}
    </>
  );
};

export default SoloRank;
