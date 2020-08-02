import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1ea1f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 625px;
  height: 50px;
  padding: 15px 150px 18px 17px;
  line-height: 17px;
  font-size: 14px;
  color: #9b9b9b;
  border: none;
  border-radius: 0.4rem;
  transition: box-shadow 300ms;
  &:focus {
    outline: none;
    box-shadow: 0.1rem 0.1rem 1rem #5e35b1;
  }
`;

const IButton = styled.img`
  padding: 10px;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    box-shadow: 0.1rem 0.1rem 1rem #5e35b1;
  }
`;

const Button = styled.button`
  position: absolute;
  height: 50px;
  margin: 0;
  margin-left: 10px;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const HomePresenter = ({ playerName, handleSearchTerm }) => (
  <>
    <Helmet>
      <title>Front_Task | OPGG</title>
    </Helmet>

    <Container>
      <Div>
        <img
          src={require("../../assets/opgg_logo.png")}
          width="370px"
          height="200px"
          alt="opgg_logo"
        />
      </Div>
      <Div>
        <Input
          type="text"
          placeholder={"소환사명, 소환사명, ..."}
          value={playerName}
          onChange={handleSearchTerm}
        />
        <Link to={`/searchPlayer/${playerName}`}>
          <Button>
            <IButton
              src={require("../../assets/opgg_button.png")}
              width="90px"
              height="50px"
              alt="opgg_logo"
            />
          </Button>
        </Link>
      </Div>
    </Container>
  </>
);

HomePresenter.propTypes = {
  playerName: PropTypes.string,
  handleSearchTerm: PropTypes.func,
};

export default HomePresenter;
