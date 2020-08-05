import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: table-cell;
  height: 96px;
  vertical-align: middle;
  font-size: 0;
`;
const ItemList = styled.div`
  display: block;
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
`;
const ItemImg = styled.img`
  border: 0;
  width: 100%;
  height: 100%;
  background-size: 100%;
`;
const ItemButton = styled.div`
  display: inline-block;
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
`;

const Trinket = styled.div`
  display: block;
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

const Items = ({ items, ward, gameResult }) => {
  const itemlist = [...items, {}, {}, {}, {}, {}, {}, {}].slice(0, 7);
  return (
    <>
      <Container>
        <ItemList>
          {itemlist.map((item) => (
            <>
              <Item>
                <ItemImg
                  src={
                    item.imageUrl === undefined
                      ? "https://opgg-static.akamaized.net/images/pattern/opacity.1.png"
                      : item.imageUrl
                  }
                  alt="item"
                />
              </Item>
            </>
          ))}
          <ItemButton>
            <ItemButtonImg
              src={
                gameResult
                  ? "https://opgg-static.akamaized.net/css3/sprite/images/icon-buildblue-p.png"
                  : "https://opgg-static.akamaized.net/css3/sprite/images/icon-buildred-p.png"
              }
              alt="itemButton"
            />
          </ItemButton>
        </ItemList>
        <Trinket>
          <TrinKetImg
            src={
              gameResult
                ? "https://opgg-static.akamaized.net/images/site/summoner/icon-ward-blue.png"
                : "https://opgg-static.akamaized.net/images/site/summoner/icon-ward-red.png"
            }
            alt="ward"
          />
          {` 제어 와드`}
          <span>{` ${ward.visionWardsBought}`}</span>
        </Trinket>
      </Container>
    </>
  );
};

Items.propTypes = {
  items: PropTypes.array,
  ward: PropTypes.object,
  gameResult: PropTypes.bool,
};

export default Items;
