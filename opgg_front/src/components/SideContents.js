import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 10px;
`;

const Box1 = styled.div`
  height: 124px;
  border: 1px solid #cdd2d2;
  margin-bottom: 8px;
  background-color: red;
`;

const Box2 = styled.div`
  height: 98px;
  border: 1px solid #cdd2d2;
  margin-bottom: 8px;
  background-color: blue;
`;

const Box3 = styled.div`
  height: 415px;
  border: 1px solid #cdd2d2;
  margin-bottom: 45px;
  background-color: green;
`;

const Box4 = styled.div`
  height: 188px;
  border: 1px solid #cdd2d2;
  margin-bottom: 45px;
  background-color: yellow;
`;

const SideContents = () => (
  <>
    <Container>
      <Box1></Box1>
      <Box2></Box2>
      <Box3></Box3>
      <Box4></Box4>
    </Container>
  </>
);

export default SideContents;
