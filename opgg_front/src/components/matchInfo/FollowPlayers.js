import React from "react";
import styled from "styled-components";

const Container = styled.div`
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

const FollowPlayers = ({ teams }) => (
  <>
    <Container>
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
    </Container>
  </>
);

FollowPlayers.propTypes = {};

export default FollowPlayers;
