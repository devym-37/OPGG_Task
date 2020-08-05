import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 415px;
  border: 1px solid #cdd2d2;
  margin-bottom: 45px;
  background-color: #f2f2f2;
`;

const TableContainer = styled.ul`
  display: table;
  width: 100%;
  height: 44px;
  table-layout: fixed;
`;

const ActiveTab = styled.li`
  display: table-cell;
  border-bottom-color: #ededed;
  background-color: #ededed;
  color: #555e5e;
  vertical-align: middle;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
`;
const DisabledTab = styled.li`
  display: table-cell;
  border-left: 1px solid #cdd2d2;
  border-bottom: 1px solid #cdd2d2;
  background-color: #f2f2f2;
  vertical-align: middle;
  cursor: pointer;
  color: #879292;
  text-align: center;
`;

const ChampionBox = styled.div`
  display: table;
  width: 100%;
  border-bottom: 1px solid #cdd2d2;
  color: #879292;
  text-align: center;
  background-color: #ededed;
  font-family: Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic,
    Dotum, Arial, Tahoma;
  &:nth-child(9) {
    border-bottom: none;
  }
`;

const Face = styled.div`
  display: table-cell;
  width: 60px;
  padding: 5px 0 0 0;
  text-align: right;
  vertical-align: middle;
`;

const FaceImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
`;

const ChampionInfo = styled.div`
  display: table-cell;
  width: 85px;
  text-align: left;
  vertical-align: middle;
  padding-left: 10px;
`;

const ChampionName = styled.div`
  width: 70px;
  color: #555e5e;
  font-weight: bold;
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ChampionMinionKill = styled.div`
  margin-top: 6px;
  font-size: 12px;
  white-space: nowrap;
`;

const PersonalKDA = styled.div`
  display: table-cell;
  line-height: 1.8;
  vertical-align: middle;
`;

const KDA = styled.div`
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  color: ${(props) =>
    props.kda >= 5
      ? "#e19205"
      : props.kda >= 4 && props.kda < 5
      ? "#1f8ecd"
      : props.kda >= 3 && props.kda < 4
      ? "#2daf7f"
      : "#5e5e5e"};
`;

const KDAEach = styled.div`
  font-size: 12px;
  color: #879292;
  white-space: nowrap;
`;

const Kill = styled.span``;
const Death = styled.span``;
const Assist = styled.span``;

const Bar = styled.span`
  color: #bbb;
`;

const Played = styled.div`
  display: table-cell;
  width: 70px;
  line-height: 1.8;
  vertical-align: middle;
`;

const WinRatio = styled.div`
  font-weight: bold;
  font-size: 13px;
  color: ${(props) => (props.ratio >= 60 ? "#c6443e" : "#879292")};
`;

const Title = styled.div`
  font-size: 11px;
  white-space: nowrap;
`;

const MostChampion = ({ playerMost }) => {
  const champions = playerMost.champions
    .sort((a, b) => b.games - a.games)
    .slice(0, 7);
  console.log("champions", champions.length);
  return (
    <>
      <Container>
        <TableContainer>
          <ActiveTab>
            <span>챔피언 승률</span>
          </ActiveTab>
          <DisabledTab>
            <span>7일간 랭크 승률</span>
          </DisabledTab>
        </TableContainer>
        {champions.map((champion) => (
          <ChampionBox>
            <Face>
              <FaceImg src={champion.imageUrl} alt="champion image" />
            </Face>
            <ChampionInfo>
              <ChampionName>{champion.name}</ChampionName>
              <ChampionMinionKill>{`CS ${champion.cs} (${(
                champion.cs / 30
              ).toFixed(1)})`}</ChampionMinionKill>
            </ChampionInfo>
            <PersonalKDA>
              <KDA
                kda={(
                  (champion.kills + champion.assists) /
                  champion.deaths
                ).toFixed(2)}
              >
                <span>{`${(
                  (champion.kills + champion.assists) /
                  champion.deaths
                ).toFixed(2)}:1 `}</span>
                <span>평점</span>
              </KDA>
              <KDAEach>
                <Kill>{`${(champion.kills / champion.games).toFixed(
                  1
                )} `}</Kill>
                <Bar>/</Bar>
                <Death>{` ${(champion.deaths / champion.games).toFixed(
                  1
                )} `}</Death>
                <Bar>/</Bar>
                <Assist>{` ${(champion.assists / champion.games).toFixed(
                  1
                )}`}</Assist>
              </KDAEach>
            </PersonalKDA>
            <Played>
              <WinRatio
                ratio={Math.round((champion.wins / champion.games) * 100)}
              >{`${Math.round(
                (champion.wins / champion.games) * 100
              )}%`}</WinRatio>
              <Title>{`${champion.games}게임`}</Title>
            </Played>
          </ChampionBox>
        ))}
      </Container>
    </>
  );
};

export default MostChampion;
