import React from "react"
import GlobalStyle from "../GlobalStyle"
import { styled } from "styled-components"
import { Container } from "../styles/basicStyles"
import Footer from "../Components/Footer"
import { GoChevronLeft, GoSearch, GoHeartFill } from 'react-icons/go'

const profile = "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
function Mypage() {
    return(
        <>
        <GlobalStyle />
        <Container>
            <div style={{height: "30px"}}></div>
            hi
        </Container>
        <Footer>
            <GoHeartFill style={{ color: '#23AA49' }} />
        </Footer>
        </>
    ) 
}

export default Mypage