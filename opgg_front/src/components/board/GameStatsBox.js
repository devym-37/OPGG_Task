import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GameStatsBox = () => (
  <>
    <Container>
      <Navigation>
        <ListType>
          <ILink to="#">
            <GameType>전체</GameType>
          </ILink>
          <ILink to="#">
            <GameType>솔로게임</GameType>
          </ILink>
          <ILink to="#">
            <GameType>자유랭크</GameType>
          </ILink>
        </ListType>
      </Navigation>
      <StatsBox>
        <Box>
          <StatsTable>
            <Tbody>
              <TrItems>
                <TdTitle>
                  <WinRatio>
                    <span>20</span>
                    {`전 `}
                    <span>10</span>
                    {`승 `}
                    <span>10</span>
                    {`패 `}
                  </WinRatio>
                </TdTitle>
                <MostChampion>
                  <MostList>
                    {
                      <MostItem>
                        <MostInfo></MostInfo>
                      </MostItem>
                    }
                  </MostList>
                </MostChampion>
                <TdTitle>선호 포지션 (랭크)</TdTitle>
              </TrItems>
              <TrItems>
                <Summary>
                  <WinRatioGraph>
                    <GraphSummary>
                      <Text>승률</Text>
                    </GraphSummary>
                  </WinRatioGraph>
                </Summary>
                <KDAInfo>
                  <KDA>
                    <KDAStats>7</KDAStats>
                    {` / `}
                    <KDAStats>9</KDAStats>
                    {` / `}
                    <KDAStats>2</KDAStats>
                  </KDA>
                  <KDARatio>
                    <KDAAverage>2.2:1</KDAAverage>
                    <CKRate>{`(킬관여율)`}</CKRate>
                  </KDARatio>
                </KDAInfo>
                <Positions>
                  <PositionInfo>
                    {
                      <PositionItem>
                        <PositionImg>
                          <PositionImage />
                        </PositionImg>
                        <PositionStat>
                          <PositionName>미드</PositionName>
                          <PositionRole>
                            <b>75</b>%
                          </PositionRole>
                          <PositionWin>
                            승률
                            <PositionWinRatio>
                              <b>47</b>%
                            </PositionWinRatio>
                          </PositionWin>
                        </PositionStat>
                      </PositionItem>
                    }
                    {
                      <PositionItem>
                        <PositionImg>
                          <PositionImage />
                        </PositionImg>
                        <PositionStat>
                          <PositionName>미드</PositionName>
                          <PositionRole>
                            <b>75</b>%
                          </PositionRole>
                          <PositionWin>
                            승률
                            <PositionWinRatio>
                              <b>47</b>%
                            </PositionWinRatio>
                          </PositionWin>
                        </PositionStat>
                      </PositionItem>
                    }
                  </PositionInfo>
                </Positions>
                {/* 없을때 */}
                {/* <Positions>
                  <NotFoundInfo>
                    {
                      <NotFoundItem>
                        <NotFoundImg>
                          <NotFountImage />
                        </NotFoundImg>
                        <NotFoundStat>
                          <NotFoundText>포지션 정보가 없습니다.</NotFoundText>
                        </NotFoundStat>
                      </NotFoundItem>
                    }
                  </NotFoundInfo>
                </Positions> */}
              </TrItems>
            </Tbody>
          </StatsTable>
        </Box>
      </StatsBox>
    </Container>
  </>
);

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
const ILink = styled(Link)`
  :active {
    padding-left: 10px;
    border-bottom: 2px solid #1f8ecd;
  }
  :visited {
    padding-left: 10px;
    border-bottom: 2px solid #1f8ecd;
  }
`;
const GameType = styled.li`
  display: inline-block;
  height: 32px;
  margin: 0 10px;
  vertical-align: top;
  padding-top: 12px;
  /* 선택 시 아래  */
  /* border-bottom: 2px solid #1f8ecd; */
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
`;
const TdTitle = styled.td`
  padding: 16px 0 14px 20px;
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
const MostInfo = styled.div``;

const WinRatio = styled.div``;

const Summary = styled.td`
  display: table-cell;
  padding: 0 0 0 24px;
  vertical-align: top;
`;
const WinRatioGraph = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
`;
const GraphSummary = styled.div`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 90px;
  vertical-align: middle;
`;
const Text = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  text-align: center;
  width: 100%;
  margin-top: -8px;
  line-height: 16px;
  font-size: 14px;
  color: #555;
`;

const KDAInfo = styled.td`
  display: table-cell;
  color: #879292;
  text-align: center;
  vertical-align: top;
  padding-top: 18px;
  width: 164px;
`;
const KDA = styled.div`
  color: #879292;
  font-size: 11px;
  line-height: 12px;
  font-weight: bold;
`;
const KDAStats = styled.span`
  color: #555e5e;
  /* death */
  /* color: #c6443e; */
`;

const KDARatio = styled.div`
  font-size: 16px;
  line-height: 19px;
  margin-top: 7px;
`;
const KDAAverage = styled.span`
  color: #353a3a;
`;
const CKRate = styled.span`
  color: #c6443e;
`;

const Positions = styled.td`
  display: table-cell;
  width: 183px;
  border-left: 1px solid #cdd2d2;
  white-space: nowrap;
  vertical-align: middle;
`;
const PositionInfo = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 16px 0 12px;
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
  vertical-align: middle;
  text-indent: -99999px;
  background-position: -112px -2691px;
  width: 28px;
  height: 28px;
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
