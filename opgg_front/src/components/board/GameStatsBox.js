import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

const GameStatsBox = ({ playerMatch, tabValue, handleChangeTab, error }) => {
  const totalMatch = playerMatch.summary.wins + playerMatch.summary.losses;
  const positions = [...playerMatch.positions, {}, {}].slice(0, 2);

  const kda = (
    (playerMatch.summary.kills + playerMatch.summary.assists) /
    playerMatch.summary.deaths
  ).toFixed(2);
  const ckRatio = Math.round(
    (totalMatch / (playerMatch.summary.kills + playerMatch.summary.assists)) *
      100
  );
  const champions = [...playerMatch.champions, {}, {}, {}].slice(0, 3);
  const chartData = {
    datasets: [
      {
        data: [playerMatch.summary.losses, playerMatch.summary.wins],
        backgroundColor: ["#ee5a52", "#1f8ecd"],
        weight: 2,
      },
    ],
  };
  return (
    <>
      <Container>
        <Navigation>
          <ListType>
            <GameType
              data-user="전체"
              value="전체"
              onClick={(event) => handleChangeTab(event)}
              tabValue={tabValue}
            >
              전체
            </GameType>

            <GameType
              data-user="솔로"
              value="솔로"
              onClick={(event) => handleChangeTab(event)}
              tabValue={tabValue}
            >
              솔로게임
            </GameType>

            <GameType
              data-user="자유"
              value="자유"
              onClick={(event) => handleChangeTab(event)}
              tabValue={tabValue}
            >
              자유랭크
            </GameType>
          </ListType>
        </Navigation>
        <StatsBox>
          <Box>
            <StatsTable>
              <Tbody>
                <TrItems>
                  <TdTitle>
                    <WinRatio>
                      <span>{totalMatch}</span>
                      {`전 `}
                      <span>{playerMatch.summary.wins}</span>
                      {`승 `}
                      <span>{playerMatch.summary.losses}</span>
                      {`패 `}
                    </WinRatio>
                    <Chart>
                      <div
                        style={{
                          width: 150,
                          height: 130,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Doughnut
                          data={chartData}
                          options={{
                            responsive: true,
                            maintainAspectRatio: true,
                          }}
                        />
                        <Text>
                          {`${Math.round(
                            (playerMatch.summary.wins / totalMatch) * 100
                          )}%`}
                        </Text>
                      </div>
                      <KDAColumn>
                        <KDA>
                          <KDAStats>
                            {(playerMatch.summary.kills / totalMatch).toFixed(
                              1
                            )}
                          </KDAStats>
                          {` / `}
                          <KDAStats death={playerMatch.summary.deaths}>
                            {(playerMatch.summary.deaths / totalMatch).toFixed(
                              1
                            )}
                          </KDAStats>
                          {` / `}
                          <KDAStats>
                            {(playerMatch.summary.assists / totalMatch).toFixed(
                              1
                            )}
                          </KDAStats>
                        </KDA>
                        <KDARatio>
                          <KDAAverage kda={kda}>{`${kda}:1`}</KDAAverage>
                          <CKRate>{` (${ckRatio}%)`}</CKRate>
                        </KDARatio>
                      </KDAColumn>
                    </Chart>
                  </TdTitle>
                  <MostChampion>
                    <MostList>
                      {champions &&
                        champions.map((champion) => {
                          return champion.id !== undefined ? (
                            <MostItem>
                              <MostInfo>
                                <MostImage>
                                  <MostImg
                                    src={champion.imageUrl}
                                    alt="championImage"
                                  />
                                </MostImage>
                                <MostName>{champion.name}</MostName>
                                <MostWonLose>
                                  <b>{`${Math.round(
                                    (champion.wins /
                                      (champion.wins + champion.losses)) *
                                      100
                                  )}%`}</b>
                                  {` (`}
                                  <span>{champion.wins}</span>
                                  {`승 `}
                                  <span>{champion.losses}</span>
                                  {`패)`}
                                </MostWonLose>
                                <MostKDA>
                                  <span>{`${(
                                    (champion.kills + champion.assists) /
                                    champion.deaths
                                  ).toFixed(2)}`}</span>
                                  {` 평점`}
                                </MostKDA>
                              </MostInfo>
                            </MostItem>
                          ) : (
                            <MostNotFoundItem>
                              <MostNotFound>
                                <MostNotFoundImage>
                                  <MostNotFoundImg
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    alt="Not Found Champion"
                                  />
                                </MostNotFoundImage>
                                <MostNotFoundText>
                                  챔피언 정보가 없습니다.
                                </MostNotFoundText>
                              </MostNotFound>
                            </MostNotFoundItem>
                          );
                        })}
                    </MostList>
                  </MostChampion>
                  <TdTitle>
                    <div>선호 포지션 (랭크)</div>
                    <PositionInfo>
                      {positions && positions[0].position !== undefined ? (
                        positions.map((position) => {
                          return position.position !== undefined ? (
                            <PositionItem>
                              <PositionImg>
                                <PositionImage
                                  position={position.position}
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                />
                              </PositionImg>
                              <PositionStat>
                                <PositionName>
                                  {position.position === "TOP"
                                    ? "탑"
                                    : position.position === "JNG"
                                    ? "정글"
                                    : position.position === "MID"
                                    ? "미드"
                                    : position.position === "ADC"
                                    ? "바텀"
                                    : position.position === "SUP"
                                    ? "서폿"
                                    : ""}
                                </PositionName>
                                <PositionRole>
                                  <b>{`${Math.round(
                                    (position.games / totalMatch) * 100
                                  )}`}</b>
                                  %
                                </PositionRole>
                                <PositionWin>
                                  승률
                                  <PositionWinRatio>
                                    <b>{`${Math.round(
                                      (position.wins / position.games) * 100
                                    )}`}</b>
                                    %
                                  </PositionWinRatio>
                                </PositionWin>
                              </PositionStat>
                            </PositionItem>
                          ) : (
                            <NotFoundInfo>
                              <NotFoundItem>
                                <NotFoundImg>
                                  <NotFountImage src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                                </NotFoundImg>
                                <NotFoundStat>
                                  <NotFoundText>
                                    포지션 정보가 없습니다.
                                  </NotFoundText>
                                </NotFoundStat>
                              </NotFoundItem>
                            </NotFoundInfo>
                          );
                        })
                      ) : (
                        <NotFoundInfo>
                          <NotFoundItem>
                            <NotFoundImg>
                              <NotFountImage src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                            </NotFoundImg>
                            <NotFoundStat>
                              <NotFoundText>
                                포지션 정보가 없습니다.
                              </NotFoundText>
                            </NotFoundStat>
                          </NotFoundItem>
                        </NotFoundInfo>
                      )}
                    </PositionInfo>
                  </TdTitle>
                </TrItems>
              </Tbody>
            </StatsTable>
          </Box>
        </StatsBox>
      </Container>
    </>
  );
};
export default GameStatsBox;

const Container = styled.div`
  height: 194px;
  border: 1px solid #cdd2d2;
  margin-bottom: 16px;
`;

const Navigation = styled.div`
  position: relative;
  border-bottom: 1px solid #cdd2d2;
  margin-bottom: -1px;
  overflow: visible;
  height: 36px;
`;
const ListType = styled.ul`
  display: block;
  float: left;
  padding-left: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const GameType = styled.li`
  display: inline-block;
  height: 36px;
  margin: 0 10px;
  vertical-align: top;
  padding-top: 12px;
  /* 선택 시 아래  */
  cursor: pointer;
  border-bottom: ${(props) =>
    props.value === props.tabValue ? "2px solid #1f8ecd" : "none"};
  &:active {
    border-bottom: 2px solid #1f8ecd;
  }
`;

const Chart = styled.div`
  display: flex;
`;

const KDAColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StatsBox = styled.div`
  font-family: Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic,
    Dotum, Arial, Tahoma;
  text-align: center;
  height: 158px;
  margin-top: -1px;
`;

const Box = styled.div`
  height: 158px;
  box-shadow: 0 1px #dcdfdf;
  background: #f2f2f2;
  border-radius: 2px;
  box-sizing: border-box;
  text-align: left;
`;
const StatsTable = styled.table`
  height: 158px;
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  width: 100%;
  table-layout: auto;
  border-bottom: 1px solid #cdd2d2;
  background-color: #ededed;
`;
const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;
const TrItems = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  border-bottom: 1px solid #cdd2d2;
`;
const TdTitle = styled.td`
  padding: 16px 0 0 20px;
  line-height: 14px;
  font-size: 12px;
  color: #666;
  height: 14px;
  border-left: 1px solid #cdd2d2;
  &:first-child {
    border-left: none;
    padding-left: 24px;
  }
`;
const MostChampion = styled.td`
  display: table-cell;
  vertical-align: inherit;
  width: 229px;
  border-left: 1px solid #cdd2d2;
`;
const MostList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0;
  margin-left: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const MostItem = styled.li`
  position: relative;
  display: block;
  white-space: nowrap;
  margin-top: 12px;
  padding-left: 42px;
  padding-top: 1px;
  &:first-child {
    margin-top: 0;
  }
  ::after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: "";
    clear: both;
    height: 0;
  }
`;
const MostNotFoundItem = styled.li`
  position: relative;
  display: block;
  white-space: nowrap;
  margin-top: 12px;
  padding-left: 42px;
  padding-top: 1px;
  &:first-child {
    margin-top: 0;
  }
  ::after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: "";
    clear: both;
    height: 0;
  }
`;
const MostNotFound = styled.div``;
const MostNotFoundImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
`;
const MostNotFoundImg = styled.img`
  display: inline-block;
  vertical-align: middle;
  text-indent: -99999px;
  background-position: -106px -1668px;
  width: 34px;
  height: 34px;
  background-image: url("http://opgg-static.akamaized.net/assets/site.png?image=q_auto&v=1596678636");
`;
const MostNotFoundText = styled.div`
  font-size: 11px;
  line-height: 34px;
  color: #999;
`;

const MostInfo = styled.div``;
const MostImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
`;
const MostImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
const MostName = styled.div`
  margin-bottom: 2px;
  line-height: 16px;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const MostWonLose = styled.div`
  display: inline-block;
  font-size: 11px;
  line-height: 12px;
  color: #333;
`;
const MostKDA = styled.div`
  display: inline-block;
  line-height: 12px;
  font-size: 11px;
  color: #333;
  font-weight: bold;
  ::before {
    display: inline-block;
    margin-left: 6px;
    margin-right: 6px;
    content: "";
    border-left: 1px solid #e0e3e3;
    height: 11px;
    vertical-align: middle;
  }
`;

const WinRatio = styled.div``;

const Text = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  top: 50%;
  text-align: center;
  width: 100%;
  margin-top: 5px;
  line-height: 16px;
  font-size: 14px;
  color: #555;
`;

const KDA = styled.div`
  color: #879292;
  font-size: 11px;
  line-height: 12px;
  font-weight: bold;
`;
const KDAStats = styled.span`
  color: ${(props) => (props.death ? "#c6443e" : "#555e5e")};
`;

const KDARatio = styled.div`
  font-size: 16px;
  line-height: 19px;
  margin-top: 7px;
`;
const KDAAverage = styled.span`
  color: ${(props) =>
    props.kda >= 5
      ? "#e19205"
      : props.kda >= 4 && props.kda < 5
      ? "#1f8ecd"
      : props.kda >= 3 && props.kda < 4
      ? "#2daf7f"
      : "#353a3a"};
  font-weight: bold;
`;
const CKRate = styled.span`
  font-family: Helvetica;
  color: #c6443e;
`;

const PositionInfo = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  list-style: none;
  font-size: 0;
`;
const PositionItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
`;
const PositionImg = styled.div`
  display: inline-block;
  width: 36px;
  line-height: 34px;
  vertical-align: middle;
  text-align: center;
`;
const PositionImage = styled.img`
  display: inline-block;
  width: ${(props) => (props.position === "SUP" ? "36px" : "28px")};
  height: 26px;
  vertical-align: middle;
  text-indent: -99999px;
  outline: none;
  background-position: ${(props) =>
    props.position === "TOP"
      ? "-112px -2844px"
      : props.position === "JNG"
      ? "-116px -2613px"
      : props.position === "MID"
      ? "-112px -2691px"
      : props.position === "ADC"
      ? "-112px -2536px"
      : props.position === "SUP"
      ? "-104px -2767px"
      : ""};
  background-image: url("http://opgg-static.akamaized.net/assets/site.png?image=q_auto&v=1596678636");
`;
const PositionStat = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-bottom: 1px;
  margin-left: 4px;
`;
const PositionName = styled.div`
  line-height: 16px;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`;
const PositionRole = styled.span`
  line-height: 12px;
  font-size: 11px;
  color: #1f8ecd;
`;
const PositionWin = styled.span`
  ::before {
    display: inline-block;
    margin-left: 6px;
    margin-right: 6px;
    content: "";
    border-left: 1px solid #cdd2d2;
    height: 12px;
    vertical-align: middle;
  }
  line-height: 12px;
  font-size: 11px;
  color: #666;
`;
const PositionWinRatio = styled.span`
  color: #333;
`;

const NotFoundInfo = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 16px 0 12px;
  font-size: 0;
`;
const NotFoundItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
`;
const NotFoundImg = styled.div`
  display: inline-block;
  width: 36px;
  line-height: 34px;
  vertical-align: middle;
  text-align: center;
`;
const NotFountImage = styled.img`
  display: inline-block;
  vertical-align: middle;
  text-indent: -99999px;
  background-position: -116px -2921px;
  width: 24px;
  height: 21px;
  background-image: url("http://opgg-static.akamaized.net/assets/site.png?image=q_auto&v=1595653530");
`;
const NotFoundStat = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-bottom: 1px;
  margin-left: 4px;
`;
const NotFoundText = styled.div`
  line-height: 12px;
  font-size: 11px;
  color: #999;
`;
