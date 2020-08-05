import React from "react";
import styled from "styled-components";
import KDA from "./KDA";

const Container = styled.div`
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  font-size: 0;
`;
const ItemList = styled.div`
  width: 96px;
  margin: 0 auto;
`;
const Item = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 2px;
  overflow: hidden;
  background-color: #99b9cf;
`;
const ItemImg = styled.img`
  border: 0;
  width: 100%;
  height: 100%;
  /* 이미지없을때 url */
  background-image: url("https://opgg-static.akamaized.net/images/pattern/opacity.1.png");
  background-size: 100%;
`;
const ItemButton = styled.div`
  margin-top: 2px;
  border: none;
  padding: 0;
  background: none;
  width: 22px;
  height: 22px;
  text-align: center;
`;
const ItemButtonImg = styled.img`
  border: 0;
  width: 100%;
  display: none;
`;

const Trinket = styled.div`
  margin-top: 7px;
  color: #353a3a;
  line-height: 13px;
  font-size: 11px;
  text-align: center;
`;
const TrinKetImg = styled.img`
  border: 0;
  vertical-align: middle;
`;

const Items = ({ items, ward, isWin }) => (
  <>
    <Container>
      <ItemList>
        {
          <Item>
            <ItemImg src="주소" alt="정보" />
          </Item>
        }
        <ItemButton>
          <ItemButtonImg src={"조건부 red blue로 표현 가능"} alt="정보" />
        </ItemButton>
      </ItemList>
      <Trinket>
        <TrinKetImg src={"조건부 red blue로 표현 가능"} alt="정보" />
        제어 와드
        <span>{ward}</span>
      </Trinket>
    </Container>
  </>
);

Items.propTypes = {};

export default Items;
