import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 100px;
  margin-top: 100px;
  z-index: 30;
`;

export default () => (
  <Container>
    <span role="img" aria-label="timer">
      ⏰
    </span>
  </Container>
);
