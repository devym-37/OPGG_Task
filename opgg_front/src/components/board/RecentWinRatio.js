import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 188px;
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
  border-right: 1px solid #cdd2d2;
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
  height: 48px;
  border-bottom: 1px solid #cdd2d2;
  background: #ededed;
  color: #879292;
  text-align: center;
  font-size: 12px;
  table-layout: fixed;
  font-family: Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic,
    Dotum, Arial, Tahoma;
  &:nth-child(5) {
    border-bottom: none;
  }
`;

const Face = styled.div`
  display: table-cell;
  width: 44px;
  padding: 5px 0 0 0;
  text-align: right;
  vertical-align: middle;
`;

const FaceImg = styled.img`
  display: inline-block;
  background-position: 0px -1664px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
`;

const ChampionInfo = styled.div`
  display: table-cell;
  width: 61px;
  text-align: left;
  vertical-align: middle;
`;

const ChampionName = styled.div`
  width: 100%;
  margin-left: 10px;
  font-size: 13px;
  color: #555e5e;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
`;

const WinRatio = styled.div`
  display: table-cell;
  width: 40px;
  vertical-align: middle;
`;

const RatioGraph = styled.div`
  display: table-cell;
  height: 40px;
  vertical-align: middle;
  padding-left: 6px;
  padding-right: 12px;
`;

const WinRatioGraph = styled.div`
  font-family: Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic,
    Dotum, Arial, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Graph = styled.div`
  position: relative;
  display: inline-block;
  width: 140px;
  height: 20px;
  vertical-align: middle;
`;

const FillLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: ${(props) => (props.ratio ? "3px 0 0 3px" : "3px")};
  z-index: 2;
  background: #3d95e5;
  border: 1px solid #3480c6;
  width: ${(props) => props.ratio}%;
`;

const FillLeftText = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  font-size: 11px;
  z-index: 3;
  color: #f2f2f2;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  left: 6px;
  text-align: left;
`;

const FillRight = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 3px;
  width: 100%;
  z-index: 1;
  background: #ee5a52;
  border: 1px solid #c6443e;
`;

const FillRightText = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  font-size: 11px;
  z-index: 3;
  color: #f2f2f2;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  right: 5px;
  text-align: right;
`;

const Bar = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  border-left: 1px solid #1a78ae;
  border-right: 1px solid #c6443e;
  z-index: 2;
  left: ${(props) => props.ratio}%;
`;

const RecentWinRatio = ({ playerMost }) => {
  const champions = playerMost.recentWinRate
    .sort((a, b) => b.wins + b.losses - (a.wins + a.losses))
    .slice(0, 3);

  return (
    <>
      <Container>
        <TableContainer>
          <DisabledTab>
            <a>챔피언 승률</a>
          </DisabledTab>
          <ActiveTab>
            <a>7일간 랭크 승률</a>
          </ActiveTab>
        </TableContainer>
        {champions.map((champion) => (
          <ChampionBox>
            <Face>
              <FaceImg src={champion.imageUrl} alt="champion image" />
            </Face>
            <ChampionInfo>
              <ChampionName>{champion.name}</ChampionName>
            </ChampionInfo>

            <WinRatio>{`${Math.round(
              (champion.wins / (champion.wins + champion.losses)) * 100
            )}%`}</WinRatio>

            <RatioGraph>
              <WinRatioGraph>
                <Graph>
                  <FillLeft
                    ratio={Math.round(
                      (champion.wins / (champion.wins + champion.losses)) * 100
                    )}
                  />
                  <FillLeftText>{`${champion.wins}승`}</FillLeftText>
                  <FillRight />
                  <FillRightText>{`${champion.losses}패`}</FillRightText>
                  <Bar
                    ratio={Math.round(
                      (champion.wins / (champion.wins + champion.losses)) * 100
                    )}
                  />
                </Graph>
              </WinRatioGraph>
            </RatioGraph>
          </ChampionBox>
        ))}
      </Container>
    </>
  );
};

export default RecentWinRatio;
