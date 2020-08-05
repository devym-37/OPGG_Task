import React from "react";
import styled from "styled-components";

const Container = styled.div`
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

const GameSettingsInfo = () => (
  <>
    <Container>
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
    </Container>
  </>
);

GameSettingsInfo.propTypes = {};

export default GameSettingsInfo;
