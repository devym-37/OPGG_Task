import React from "react";
import styled from "styled-components";
import SideContents from "./SideContents";

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const Contents = styled.div``;

const Content = ({ searchResult, playerMost, playerMatch }) => (
  <>
    {searchResult ? (
      <Container>
        <SideContents />
      </Container>
    ) : null}
  </>
);

export default Content;
