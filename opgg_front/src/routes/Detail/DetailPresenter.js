import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Content from "../../components/Content";

const Container = styled.div`
  height: 273px;
  padding-top: 97px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  border-top: 1px solid #cdd2d2;
`;

const IHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 97px;
  background-color: #1ea1f7;
`;

const Search = styled.div`
  position: relative;
  max-width: 1440px;
  top: 53px;
  left: 919px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 260px;
  height: 32px;
  padding: 9px 140px 8px 14px;
  font-family: AppleSDGothicNeo-Regular;
  font-size: 12px;
  color: #727272;
  border: none;
  outline: none;
  border-radius: 2px;
  &:focus {
    outline: none;
  }
`;

const IButton = styled.img`
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  background-color: white;
  position: absolute;
  top: 0;
  left: 206px;
  height: 32px;
  width: 54px;
  z-index: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 32px;
  border-radius: 2px;
  border: none;
  outline: none;
`;

const DetailPresenter = ({
  playerName,
  searchResult,
  playerMost,
  playerMatch,
  loading,
  error,
  handleSearchTerm,
  helmetTitle,
  fetchApi,
}) => (
  <>
    <Helmet>
      <title>{`소환사 ${
        playerName ? playerName : helmetTitle.params.playerName
      } 정보 | OPGG`}</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <>
        <IHeader>
          <Search>
            <Input
              type="text"
              placeholder={"소환사명, 챔피언··· "}
              width="100"
              value={playerName}
              onChange={handleSearchTerm}
            />
            <Link to={`/searchPlayer/${playerName}`}>
              <Button onClick={() => fetchApi(playerName)}>
                <IButton
                  src="https://opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg"
                  height="14px"
                  alt="opgg_logo"
                />
              </Button>
            </Link>
          </Search>
        </IHeader>
        <Container>
          <Header searchResult={searchResult} error={error} />
        </Container>

        {searchResult ? (
          <ContentsContainer>
            <Content
              searchResult={searchResult}
              playerMost={playerMost}
              playerMatch={playerMatch}
              error={error}
            />
          </ContentsContainer>
        ) : null}
      </>
    )}
  </>
);

DetailPresenter.propTypes = {
  playerName: PropTypes.string,
  handleSearchTerm: PropTypes.func,
  helmetTitle: PropTypes.object,
};

export default DetailPresenter;
