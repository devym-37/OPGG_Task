import React from "react";
import { connect } from "react-redux";
import PlayerMatchPresenter from "./PlayerMatchPresenter";
import { playerSearch } from "../../redux/actions/userActions";
import { apiList } from "../../api";

class PlayerMatchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMatch: this.props.game,
      matchUsers: null,
      gameDate: null,
      gameTime: null,
      champion: null,
      loading: false,
      error: "",
    };
  }

  componentDidMount = async () => {
    const { game } = this.props;
    const { gameMatch } = this.state;

    const gettimeAgo = this.getTimeAgo(gameMatch.createDate);
    const getGameTime = this.getGameLength(gameMatch.gameLength);
    const getChampion = this.getChampionName(gameMatch.champion.imageUrl);

    this.setState({
      loading: true,
      gameDate: gettimeAgo,
      gameTime: getGameTime,
      champion: getChampion,
    });
    try {
      const { data: matchUsers } = await apiList.getPlayerMatchDetail(
        game.summonerName,
        game.gameId
      );
      this.setState({
        matchUsers,
      });
    } catch {
      this.setState({
        error: "Can't find results.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  getTimeAgo = (date) => {
    const current = new Date();
    const createDate = new Date(date * 1000);

    const betweenTime = Math.floor(
      (current.getTime() - createDate.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분 전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 전`;
    }
    return `${Math.floor(betweenTimeDay / 365)}년 전`;
  };

  getGameLength = (gameLength) => {
    const length = new Date(gameLength * 1000);
    const minutes = length.getMinutes();
    const seconds = length.getSeconds();
    return `${minutes}분 ${seconds}초`;
  };

  getChampionName = (value) => {
    const valueSplit = value.split("/");
    const champion = valueSplit[valueSplit.length - 1].split(".");
    return champion[0];
  };

  render() {
    const {
      gameMatch,
      matchUsers,
      gameDate,
      gameTime,
      champion,
      loading,
      error,
    } = this.state;
    const { game } = this.props;

    console.log("gameDate", gameDate);
    console.log("gameMatch", gameMatch);
    console.log("matchUsers", matchUsers);
    console.log("this.props", this.props);
    return (
      <PlayerMatchPresenter
        gameMatch={gameMatch}
        matchUsers={matchUsers}
        gameDate={gameDate}
        gameTime={gameTime}
        champion={champion}
        userName={game.summonerName}
        loading={loading}
        error={error}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.userReducer.playerName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleReduxPlayer: (payload) => dispatch(playerSearch(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerMatchContainer);
