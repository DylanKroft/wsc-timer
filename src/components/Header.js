import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      PacaTimer
    </Container>
  )
}

export default Header

const Container = styled.div`
    background-color: gray;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: 600;
    background-color: rgb(246, 211, 74);
    color: rgb(90, 21, 18);
`