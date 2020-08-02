import React from "react";
import styled from "styled-components";
import TierCard from "./TierCard";
import Profile from "./Profile";

const Container = styled.div`
  display: block;
  width: 1000px;
  margin: 0 auto;
  padding-top: 5px;
`;

const PastRank = styled.div`
  margin-top: -5px;
  padding-left: 30px;
  padding-bottom: 15px;
`;

const Face = styled.div`
  display: inline-block;
  width: 120px;
  height: 120px;
  top: 138px;
  left: 200px;
  padding-left: 30px;
  vertical-align: top;
`;

const ProfileIcon = styled.div`
  position: relative;
`;

const BorderImg = styled.div`
  position: absolute;
  left: -10px;
  top: -10px;
  width: 120px;
  height: 120px;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.background});
`;

const Img = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border: 0;
`;

const BorderText = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  margin-top: -12px;
  margin-left: -16px;
  width: 44px;
  height: 24px;
  padding-top: 3px;
  box-sizing: border-box;
  background-size: 100%;
  background: url("https://opgg-static.akamaized.net/images/site/summoner/bg-levelbox.png");
  line-height: 17px;
  font-family: Helvetica, AppleSDGothic, "Apple SD Gothic Neo", AppleGothic,
    Arial, Tahoma;
  font-size: 14px;
  text-align: center;
  color: #eabd56;
`;

const Header = ({ searchResult }) => (
  <>
    <Container>
      <PastRank>
        {searchResult && searchResult.previousTiers.length > 0
          ? searchResult.previousTiers.map((tier, index) => (
              <TierCard previousTier={tier} key={index} />
            ))
          : null}
      </PastRank>
      {searchResult ? (
        <>
          <Face>
            <ProfileIcon>
              <BorderImg background={searchResult.profileBorderImageUrl} />
              <Img src={searchResult.profileImageUrl} />
              <BorderText>{searchResult.level}</BorderText>
            </ProfileIcon>
          </Face>
          <Profile profile={searchResult} />
        </>
      ) : null}
    </Container>
  </>
);

export default Header;
