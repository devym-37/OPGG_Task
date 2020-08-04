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
      loading: false,
      error: "",
    };
  }

  componentDidMount = async () => {
    const { game } = this.props;
    console.log("game1234", game);
    this.setState({
      loading: true,
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

  render() {
    const { gameMatch, matchUsers, loading, error } = this.state;

    console.log("gameMatch", gameMatch);
    console.log("matchUsers", matchUsers);
    console.log("this.props", this.props);
    return (
      <PlayerMatchPresenter
        gameMatch={gameMatch}
        matchUsers={matchUsers}
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
