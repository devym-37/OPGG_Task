import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 50px;
  vertical-align: top;
  line-height: 1.1;
`;

const InfoContainer = styled.div`
  display: block;
  font-family: Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic,
    Dotum, Arial, Tahoma;
`;

const Text = styled.span`
  display: block;
  color: #242929;
  font-size: 20px;
  font-weight: bold;
  margin-right: 4px;
  margin-bottom: 4px;
  letter-spacing: -0.77px;
`;

const Rank = styled.div`
  margin-bottom: 5px;
`;

const LadderRank = styled.div`
  font-family: Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic,
    Dotum, Arial, Tahoma;
  font-size: 11px;
  letter-spacing: -0.42px;
  color: #657070;
`;

const Span = styled.span`
  font-family: AppleSDGothicNeo-Regular;
`;

const BoldText = styled.span`
  font-family: Helvetica-Bold;
  font-weight: bold;
`;

const Profile = ({ profile }) => (
  <>
    <Container>
      <InfoContainer>
        {console.log("profile", profile)}
        <Text>{profile.name}</Text>
        <Rank>
          <LadderRank>
            <Span>
              레더 랭킹 <BoldText>{profile.ladderRank.rank}</BoldText>
              {`위 (상위 ${profile.ladderRank.rankPercentOfTop}%)`}
            </Span>
          </LadderRank>
        </Rank>
      </InfoContainer>
    </Container>
  </>
);

export default Profile;
