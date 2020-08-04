import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import Loader from "../../components/Loader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 96px;
  margin-bottom: 8px;
  font-family: Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic,
    Dotum, Arial, Tahoma;
`;

const GameContainer = styled.div`
  position: relative;
  background: none;
`;

const Content = styled.div`
  display: table;
  width: 689px;
  border-collapse: collapse;
  border: 1px solid #cdd2d2;
  table-layout: fixed;
  background-color: #a3cfec;
  border-color: #99b9cf;
  /* 패배
  background-color: #e2b6b3;
  border-color: #cea7a7; */
`;

const GameStats = styled.div`
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  width: 70px;
  text-align: center;
  font-size: 11px;
  color: #555;
  line-height: 16px;
`;
const GameType = styled.div`
  font-weight: bold;
  width: 70px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const TimeStamp = styled.div``;
const Day = styled.span``;
const Bar = styled.div`
  display: block;
  width: 27px;
  margin: 5px auto;
  height: 2px;
  background: #99b9cf;
  /* 패배 아래 색 */
  /* background: #cea7a7; */
`;
const GameResult = styled.div`
  font-weight: bold;
  color: #1a78ae;
  /* 패배 아래 색 */
  /* color: #c6443e; */
`;
const GameLength = styled.div``;

const GameSettingsInfo = styled.div`
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  width: 100px;
  font-size: 0;
`;
const ChampionImage = styled.div`
  display: inline-block;
  width: 46px;
  height: 46px;
  vertical-align: middle;
  border-radius: 50%;
  overflow: hidden;
`;
const Image = styled.img`
  cursor: pointer;
  border: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
`;
const Spell = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 4px;
`;
const SpellContent = styled.div`
  display: block;
  width: 22px;
  height: 22px;
  margin-top: 2px;
  border-radius: 3px;
  overflow: hidden;
  &:first-child {
    margin-left: 0;
  }
`;
const SpellImg = styled.img`
  border: 0;
  display: block;
  width: 100%;
  height: 100%;
`;
const Runes = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 4px;
`;
const RuneItem = styled.div`
  width: 22px;
  height: 22px;
  &:first-child {
    margin-top: 0;
  }
`;
const RuneImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0;
  &:first-child {
    background: #000;
  }
`;
const ChampionName = styled.div`
  margin-top: 8px;
  font-size: 11px;
  color: #555;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CName = styled.span`
  text-decoration: none;
  color: inherit;
`;

const KdaContainer = styled.div`
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  font-size: 11px;
  text-align: center;
`;
const Kda = styled.div`
  color: #879292;
  font-size: 15px;
  white-space: nowrap;
`;
const KDAInfo = styled.span`
  font-weight: bold;
  color: #555e5e;
  /* death는 아래색 */
  /* color: #c6443e; */
`;
const KDARatio = styled.div`
  color: #555e5e;
  font-size: 12px;
  font-weight: bold;
  margin-top: 6px;
`;
const RatioSpan = styled.span`
  color: #353a3a;
`;
const MultiKill = styled.div`
  display: inline-block;
  margin-top: 8px;
  font-size: 10px;
  color: #f2f2f2;
`;
const Kill = styled.span`
  display: inline-block;
  background: #ee5a52;
  border: 1px solid #c6443e;
  border-radius: 15px;
  padding: 2px 5px;
  line-height: 1;
`;
const Badge = styled.div`
  display: inline-block;
  color: #fff;
  margin: 8px auto 0;
  font-size: 10px;
`;
const TextAce = styled.span`
  display: inline-block;
  padding: 2px 5px;
  line-height: 1;
  border-radius: 9px;
  background-color: #8c51c5;
  border: solid 1px #7f3590;
`;

const Stats = styled.div`
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  width: 90px;
  font-size: 11px;
  text-align: center;
  line-height: 18px;
  color: #555e5e;
`;
const Level = styled.div``;
const CS = styled.div``;
const CKRate = styled.div`
  color: #c6443e;
`;
const MMR = styled.div``;
const B = styled.b`
  font-weight: bold;
  color: #353a3a;
`;

const Items = styled.div`
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  font-size: 0;
`;
const ItemList = styled.div`
  width: 96px;
  margin: 0 auto;
`;
const Item = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 2px;
  overflow: hidden;
  background-color: #99b9cf;
`;
const ItemImg = styled.img`
  border: 0;
  width: 100%;
  height: 100%;
  /* 이미지없을때 url */
  background-image: url("https://opgg-static.akamaized.net/images/pattern/opacity.1.png");
  background-size: 100%;
`;
const ItemButton = styled.div`
  margin-top: 2px;
  border: none;
  padding: 0;
  background: none;
  width: 22px;
  height: 22px;
  text-align: center;
`;
const ItemButtonImg = styled.img`
  border: 0;
  width: 100%;
  display: none;
`;

const Trinket = styled.div`
  margin-top: 7px;
  color: #353a3a;
  line-height: 13px;
  font-size: 11px;
  text-align: center;
`;
const TrinKetImg = styled.img`
  border: 0;
  vertical-align: middle;
`;

const FolllowPlayers = styled.div`
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  width: 170px;
  font-size: 0;
`;
const Team = styled.div`
  float: left;
  width: 50%;
`;
const Summoner = styled.div`
  display: block;
  width: 80px;
  height: 18px;
  margin-left: 3px;
  text-align: left;
  white-space: nowrap;
`;
const SummonerChampion = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 3px;
  border-radius: 100%;
  overflow: hidden;
`;
const Champion = styled.div`
  width: 16px;
  height: 16px;
  background-image: url("../assets/champion16.png?image=q_auto&v=1595653530");
  display: inline-block;
  text-indent: -99999px;
`;
const SummonerName = styled.div`
  display: inline-block;
  max-width: 60px;
  vertical-align: middle;
  font-size: 11px;
  color: #555;
`;
const Name = styled.span`
  display: block;
  color: inherit;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #222;
`;

const StateButton = styled.div`
  /* 승리 */
  border-color: #4aa1d2;
  background: #64b1e4;
  /* 패배 */
  /* border-color: #d67b77;
    background: #e89d99; */
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  width: 30px;
  border: 1px solid #000;
`;
const StateContent = styled.div`
  position: relative;
  width: 30px;
  height: 96px;
`;
const StateItem = styled.div`
  position: absolute;
  left: -1px;
  top: -1px;
  width: 30px;
  height: 100%;
`;
const RightMatch = styled.a`
  text-align: center;
  text-decoration: none;
  outline: none;
  display: block;
  width: 30px;
  position: relative;
  cursor: pointer;
  height: 100%;
`;
const Button = styled.span`
  display: block;
  position: absolute;
  bottom: 10px;
  left: 9px;
  background-position: -127px -3840px;
  width: 13px;
  height: 10px;
  background-image: url("https://opgg-static.akamaized.net/assets/site.png?image=q_auto&v=1595653530");
`;

const PlayerMatchPresenter = ({ gameMatch, matchUsers, loading, error }) => (
  <>
    <Container>
      <GameContainer>
        <Content>
          <GameStats>
            <GameType>솔랭</GameType>
            <TimeStamp>
              <Day>몇일 전</Day>
            </TimeStamp>
            <Bar></Bar>
            <GameResult>승리/패배</GameResult>
            <GameLength>게임시간</GameLength>
          </GameStats>

          <GameSettingsInfo>
            <ChampionImage>
              <Image src={"주소"} alt="정보" />
            </ChampionImage>
            <Spell>
              {
                <SpellContent>
                  <SpellImg src={"주소"} alt="정보" />
                </SpellContent>
              }
            </Spell>
            <Runes>
              {
                <RuneItem>
                  <RuneImg src={"주소"} alt="정보" />
                </RuneItem>
              }
            </Runes>
            <ChampionName>
              <CName>챔피언</CName>
            </ChampionName>
          </GameSettingsInfo>

          <KdaContainer>
            <Kda>
              <KDAInfo>kill</KDAInfo>
              {` / `}
              <KDAInfo>death</KDAInfo>
              {` / `}
              <KDAInfo>assitst</KDAInfo>
            </Kda>
            <KDARatio>
              <RatioSpan>2.29:1</RatioSpan>
              {` 평점`}
            </KDARatio>
            <MultiKill>
              <Kill>더블킬</Kill>
            </MultiKill>
            <Badge>
              <TextAce>ACE</TextAce>
            </Badge>
          </KdaContainer>

          <Stats>
            <Level>레벨</Level>
            <CS>
              <span>cs(1.9)</span>
              CS
            </CS>
            <CKRate>킬관여 %</CKRate>
            <MMR>
              <span>매치 평균</span>
              <br />
              <B>Bronze</B>
            </MMR>
          </Stats>

          <Items>
            <ItemList>
              {
                <Item>
                  <ItemImg src="주소" alt="정보" />
                </Item>
              }
              <ItemButton>
                <ItemButtonImg src={"조건부 red blue로 표현 가능"} alt="정보" />
              </ItemButton>
            </ItemList>
            <Trinket>
              <TrinKetImg />
              "text"
              <span>와드갯수</span>
            </Trinket>
          </Items>

          <FolllowPlayers>
            <Team>
              {
                <Summoner>
                  <SummonerChampion>
                    <Champion></Champion>
                  </SummonerChampion>
                  <SummonerName>
                    <Name></Name>
                  </SummonerName>
                </Summoner>
              }
            </Team>
            <Team>
              {
                <Summoner>
                  <SummonerChampion>
                    <Champion></Champion>
                  </SummonerChampion>
                  <SummonerName>
                    <Name></Name>
                  </SummonerName>
                </Summoner>
              }
            </Team>
          </FolllowPlayers>

          <StateButton>
            <StateContent>
              <StateItem>
                <RightMatch href="#">
                  <Button></Button>
                </RightMatch>
              </StateItem>
            </StateContent>
          </StateButton>
        </Content>
      </GameContainer>
    </Container>
  </>
);

PlayerMatchPresenter.propTypes = {
  gameMatch: PropTypes.object,
  matchUsers: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default PlayerMatchPresenter;
