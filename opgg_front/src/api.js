import axios from "axios";

const api = axios.create({
  baseURL: "https://codingtest.op.gg/api/summoner",
});

export const apiList = {
  getPlayer: (playName) => api.get(`/${playName}`),
  getPlayerMost: (playName) => api.get(`/${playName}/mostInfo`),
  getPlayerMatchList: (playName) => api.get(`/${playName}/matches`),
  getPlayerMatchDetail: (playName, gameId) =>
    api.get(`/${playName}/matchDetail/${gameId}`),
  getItemList: () =>
    axios.get(
      "http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json"
    ),
};
