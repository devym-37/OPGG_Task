import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  width: 90px;
  font-size: 11px;
  text-align: center;
  line-height: 18px;
  color: #555e5e;
`;
const Level = styled.div``;
const CS = styled.div``;
const CKRate = styled.div`
  color: #c6443e;
`;
const MMR = styled.div``;
const B = styled.b`
  font-weight: bold;
  color: #353a3a;
`;

const Stats = ({ level, cs, csPerMin, killratio }) => (
  <>
    <Container>
      <Level>{level}</Level>
      <CS>
        <span>
          {cs}
          {`(${csPerMin})`}
        </span>
        CS
      </CS>
      <CKRate>{`킬관여 ${killratio}`}</CKRate>
    </Container>
  </>
);

Stats.propTypes = {};

export default Stats;
