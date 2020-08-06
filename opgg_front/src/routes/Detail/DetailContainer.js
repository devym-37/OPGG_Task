import React from "react";
import { connect } from "react-redux";
import DetailPresenter from "./DetailPresenter";
import { playerSearch } from "../../redux/actions/userActions";
import { apiList } from "../../api";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helmetTitle: this.props.match,
      playerName: null,
      searchResult: null,
      playerMost: null,
      playerMatch: null,
      playerMatchDetail: null,
      soloRank: null,
      freeRank: null,
      title: null,
      item: null,
      tabValue: "전체",
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
    const { playerName } = this.state;
    const searchTerm = encodeURIComponent(term);
    this.setState({
      loading: true,
      title: playerName,
    });
    try {
      const {
        data: { summoner: searchResult },
      } = await apiList.getPlayer(searchTerm);
      const { data: playerMost } = await apiList.getPlayerMost(searchTerm);
      const { data: playerMatch } = await apiList.getPlayerMatchList(
        searchTerm
      );

      const soloMatch = playerMatch.games.filter(
        (match) => match.gameType === "솔랭"
      );
      const freeMatch = playerMatch.games.filter(
        (match) => match.gameType === "자유 5:5 랭크"
      );

      this.setState({
        searchResult,
        playerMost,
        playerMatch,
        soloRank: soloMatch,
        freeRank: freeMatch,
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

  handleChangeTab = (event) => {
    event.preventDefault();
    console.log("evn");
    console.log("event.target.value", event.target.dataset.user);
    this.setState({
      tabValue: event.target.dataset.user,
    });
  };

  render() {
    const {
      playerName,
      loading,
      searchResult,
      error,
      helmetTitle,
      playerMost,
      playerMatch,
      soloRank,
      freeRank,
      title,
      tabValue,
    } = this.state;

    const { handleSearchTerm, fetchApi, handleChangeTab } = this;
    console.log("tabValue", tabValue);
    console.log("soloRank", soloRank);
    console.log("freeRank", freeRank);
    return (
      <DetailPresenter
        helmetTitle={helmetTitle}
        searchResult={searchResult}
        playerMost={playerMost}
        playerMatch={playerMatch}
        playerName={playerName}
        soloRank={soloRank}
        freeRank={freeRank}
        loading={loading}
        title={title}
        error={error}
        tabValue={tabValue}
        handleChangeTab={handleChangeTab}
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
