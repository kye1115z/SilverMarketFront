import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import {
  Container,
  Header,
  HeaderText,
} from "../styles/basicStyles";
import { GoChevronLeft } from "react-icons/go";

export default function ItemRegister() {
  const Button = styled.button`
    background-color: white;
    color: black;
    border-width: 3px;
    border-color: #bcc6bf;
    border-radius: 20px;
    width: 136px;
    height: 70vw;
    margin: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 140%;
  `;

  return (
    <>
      <GlobalStyle />
      <Header>
        <GoChevronLeft
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1.5rem",
            height: "1.5rem",
          }}
        />
        <HeaderText>상품 등록 방법 선택</HeaderText>
      </Header>
      <Container>
        <div style={{display: "flex"}}>
          <Button onClick={() => {window.location.href="/itemvideoregister"}}>
            <img src="../img/cameraLogo.svg" style={{marginBottom: "20px"}}/>
            동영상으로 <br /> 등록하기
          </Button>
          <Button onClick={() => {window.location.href="/itemvideoregister"}}>
            <img src="../img/pencilLogo.svg" style={{marginBottom: "20px"}}/>
            직접 <br /> 등록하기
          </Button>
        </div>
        <Button 
          style={{width: "75vw", height: "136px", flexDirection: "row"}}
          onClick={() => {window.location.href="/guide"}}>
            <img src="../img/questionmark.svg" style={{marginRight: "20px"}}/>
            <div style={{display: "flex", alignItems: "flex-start", flexDirection: "column"}}>
              <p style={{fontSize: "0.8rem", fontWeight: "normal"}}>등록 방법을 모르겠다면?</p>
              <p>상품 등록 가이드 보기</p>
            </div>
        </Button>
      </Container>
    </>
  );
}

