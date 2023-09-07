import BestProduct from '../Components/BestProduct'
import Footer from '../Components/Footer'
import GlobalStyle from '../GlobalStyle'
import { Header, Container } from '../styles/basicStyles'
import { GoChevronLeft, GoSearch, GoHeartFill } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import styled from 'styled-components'

function Favo() {
  const location = useLocation()
  console.log(location.state)

  const navigate = useNavigate()

  return (
    <>
      <GlobalStyle />
      <Header
        style={{
          justifyContent: 'space-between',
          padding: '2.6rem 35px 10px 30px',
        }}
      >
        <DetailButton onClick={() => navigate(-1)}>
          <GoChevronLeft
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '1.5rem',
              height: '1.5rem',
            }}
          />
        </DetailButton>
        <p style={{}}>좋아요 한 상품</p>
        <DetailButton>
          <GoSearch
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '1.3rem',
              height: '1.3rem',
            }}
          />
        </DetailButton>
      </Header>

      <BestProduct />

      <Footer>
        <GoHeartFill style={{ color: '#23AA49' }}></GoHeartFill>
      </Footer>
    </>
  )
}

export default Favo

const DetailButton = styled.button`
  background-color: transparent;
  border: none;
`
