import React from "react";
import { connect } from "react-redux";
import DetailPresenter from "./DetailPresenter";
import { playerSearch } from "../../redux/actions/userActions";
import { apiList } from "../../api";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: this.props.history,
      helmetTitle: this.props.match,
      playerName: null,
      searchResult: null,
      playerMost: null,
      playerMatch: null,
      playerMatchDetail: null,
      item: null,
      loading: false,
      error: null,
    };
  }

  componentDidMount = async () => {
    const { player } = this.props;
    this.setState({
      loading: true,
    });
    this.fetchApi(player);
  };

  fetchApi = async (term) => {
    const searchTerm = encodeURIComponent(term);
    this.setState({
      loading: true,
    });
    try {
      const {
        data: { summoner: searchResult },
      } = await apiList.getPlayer(searchTerm);
      const { data: playerMost } = await apiList.getPlayerMost(searchTerm);
      const { data: playerMatch } = await apiList.getPlayerMatchList(
        searchTerm
      );
      this.setState({
        searchResult,
        playerMost,
        playerMatch,
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

  handleSearchTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      playerName: value,
    });
    this.props.handleReduxPlayer(value);
  };

  render() {
    const {
      playerName,
      loading,
      searchResult,
      error,
      helmetTitle,
      history,
      playerMost,
      playerMatch,
    } = this.state;
    const { handleSearchTerm, fetchApi } = this;

    return (
      <DetailPresenter
        helmetTitle={helmetTitle}
        searchResult={searchResult}
        playerMost={playerMost}
        playerMatch={playerMatch}
        playerName={playerName}
        history={history}
        loading={loading}
        error={error}
        handleSearchTerm={handleSearchTerm}
        fetchApi={fetchApi}
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
