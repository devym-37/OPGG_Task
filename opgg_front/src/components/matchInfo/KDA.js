import React from "react";
import styled from "styled-components";

const KdaContainer = styled.div`
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  font-size: 11px;
  text-align: center;
`;
const Kda = styled.div`
  color: #879292;
  font-size: 15px;
  white-space: nowrap;
`;
const KDAInfo = styled.span`
  font-weight: bold;
  color: #555e5e;
  /* death는 아래색 */
  /* color: #c6443e; */
`;
const KDARatio = styled.div`
  color: #555e5e;
  font-size: 12px;
  font-weight: bold;
  margin-top: 6px;
`;
const RatioSpan = styled.span`
  color: #353a3a;
`;
const MultiKill = styled.div`
  display: inline-block;
  margin-top: 8px;
  font-size: 10px;
  color: #f2f2f2;
`;
const Kill = styled.span`
  display: inline-block;
  background: #ee5a52;
  border: 1px solid #c6443e;
  border-radius: 15px;
  padding: 2px 5px;
  line-height: 1;
`;
const Badge = styled.div`
  display: inline-block;
  color: #fff;
  margin: 8px auto 0;
  font-size: 10px;
`;
const TextAce = styled.span`
  display: inline-block;
  padding: 2px 5px;
  line-height: 1;
  border-radius: 9px;
  background-color: #8c51c5;
  border: solid 1px #7f3590;
`;

const KDA = ({ kill, death, assist, ratio, multikill, textAce }) => (
  <>
    <KdaContainer>
      <Kda>
        <KDAInfo>{kill}</KDAInfo>
        {` / `}
        <KDAInfo>{death}</KDAInfo>
        {` / `}
        <KDAInfo>{assist}</KDAInfo>
      </Kda>
      <KDARatio>
        <RatioSpan>{ratio}</RatioSpan>
        {` 평점`}
      </KDARatio>
      <MultiKill>
        <Kill>{multikill}</Kill>
      </MultiKill>
      <Badge>
        <TextAce>{textAce}</TextAce>
      </Badge>
    </KdaContainer>
  </>
);

KDA.propTypes = {};

export default KDA;
