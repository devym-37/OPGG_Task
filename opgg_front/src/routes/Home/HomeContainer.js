import React from "react";
import { connect } from "react-redux";
import HomePresenter from "./HomePresenter";
import { playerSearch } from "../../redux/actions/userActions";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
    };
  }

  handleSearchTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      playerName: value,
      loading: true,
    });
    this.props.handleReduxPlayer(value);
  };

  render() {
    const { playerName, loading, searchList, error } = this.state;
    const { handleSearchTerm } = this;

    return (
      <HomePresenter
        searchList={searchList}
        playerName={playerName}
        loading={loading}
        error={error}
        handleSearchTerm={handleSearchTerm}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
