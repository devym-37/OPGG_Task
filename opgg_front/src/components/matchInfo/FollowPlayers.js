import React from "react";
import PropTypes from "prop-types";
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
  overflow: hidden;
`;
const Champion = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${(props) => props.playerChampion});
  background-size: 16px 16px;
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
  color: ${(props) => (props.userName === props.player ? "#222" : "")};
`;

const FollowPlayers = ({ teams, userName }) => (
  <>
    <Container>
      <Team>
        {teams &&
          teams.teams[0].players.map((player) => (
            <Summoner>
              <SummonerChampion>
                {console.log(
                  "player.champion.imageUrl",
                  player.champion.imageUrl
                )}
                <Champion playerChampion={player.champion.imageUrl} />
              </SummonerChampion>
              <SummonerName>
                <Name userName={userName} player={player.summonerName}>
                  {player.summonerName}
                </Name>
              </SummonerName>
            </Summoner>
          ))}
      </Team>
      <Team>
        {teams &&
          teams.teams[1].players.map((player) => (
            <Summoner>
              <SummonerChampion>
                <Champion playerChampion={player.champion.imageUrl} />
              </SummonerChampion>
              <SummonerName>
                <Name userName={userName} player={player.summonerName}>
                  {player.summonerName}
                </Name>
              </SummonerName>
            </Summoner>
          ))}
      </Team>
    </Container>
  </>
);

FollowPlayers.propTypes = {
  teams: PropTypes.object,
  userName: PropTypes.string,
};

export default FollowPlayers;
