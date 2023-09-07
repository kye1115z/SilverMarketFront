import React from "react";
import GlobalStyle from "../GlobalStyle";
import { styled } from "styled-components";
import { Container } from "../styles/basicStyles";
import Footer from "../Components/Footer";
const profile =
  "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg";

function Mypage() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Profile>
          <ProfileImg src={profile} />
          <ProfileInfoN>name</ProfileInfoN>
          <ProfileInfoE>email</ProfileInfoE>
        </Profile>
        <ListItem>
          <Order>ORDER</Order>
          <InfoFix>회원 정보 수정하기</InfoFix>
        </ListItem>
        <Logout>Log Out</Logout>
        <Footer />
      </Container>
    </>
  );
}

export default Mypage;

const Profile = styled.div`
  height: 350px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 27%;
  border-color: black;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const ProfileInfoN = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-align: center;
`;

const ProfileInfoE = styled.p`
  font-size: 25px;
  font-weight: lighter;
  color: darkgray;
  text-align: center;
`;
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Order = styled.button`
  width: 100vw;
  height: 80px;
  color: black;
  font-size: 15px;
  text-align: left;
  background-color: white;
`;
const InfoFix = styled.button`
  width: 100vw;
  height: 80px;
  color: black;
  font-size: 15px;
  text-align: left;
  background-color: white;
`;
const Logout = styled.button`
  background-color: #f2f3f2;
  color: #53b175;
  border-radius: 20px;
  width: 364px;
  height: 67px;
  border: none;
  font-size: 20px;
  margin-top: 100px;
`;
