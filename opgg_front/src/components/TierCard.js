import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  height: 20px;
  padding: 4px 5px 3px 5px;
  border-radius: 2px;
  margin-top: 15px;
  margin-right: 7px;
  font-size: 11px;
  background-color: #e0e3e3;
  border: 1px solid #d0d3d4;
`;

const BoldSpan = styled.span`
  font-family: Helvetica;
  font-weight: bold;
  letter-spacing: -0.42px;
  color: #657070;
`;

const Span = styled.span`
  font-family: Helvetica;
  letter-spacing: -0.42px;
  color: #657070;
`;

const TierCard = ({ previousTier }) => (
  <>
    <Container>
      <BoldSpan>{`${previousTier.shortString} `}</BoldSpan>
      <Span>{previousTier.tier}</Span>
    </Container>
  </>
);

export default TierCard;
