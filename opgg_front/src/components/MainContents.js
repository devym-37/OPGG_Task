import React from "react";
import styled from "styled-components";
import MatchResults from "./MatchResults";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 690px;
`;

const Box1 = styled.div`
  height: 194px;
  border: 1px solid #cdd2d2;
  margin-bottom: 16px;
  background-color: red;
`;

const MainContents = () => (
  <>
    <Container>
      <Box1></Box1>
      <MatchResults />
      <MatchResults />
      <MatchResults />
    </Container>
  </>
);

export default MainContents;
