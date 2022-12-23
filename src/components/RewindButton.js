import React, { useState } from 'react'
import styled from 'styled-components'
import { VscDebugRestart } from 'react-icons/vsc';
import { IconContext } from "react-icons";

const RewindButton = ({setButtonPressed}) => {


  const handleClick = () => {
    setButtonPressed(2);
  }

  return (
    <Main>
    <Container onClick={handleClick}>
      <VscDebugRestart style={{ stroke: "white", strokeWidth: "0.35", fontSize: "1.6em"}}/>
    </Container>
    <Shadow/>
    </Main>
  )
}

export default RewindButton

const Container = styled.div`
    background-color: gray;
    border-radius: 100px;
    font-weight: 600;
    font-size: 1.5em;
    height: 75px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(90, 21, 18);
    color: white;
    transition-duration: 0.2s;
    margin: 10px;
    cursor: pointer;

    :active {
        transform: translateY(7px);
        //scale: 0.85;
        cursor: pointer;
    }
`

const Main = styled.div`
  height: 100%;
  position: relative;
  
`

const Shadow = styled.div`
    border-radius: 100px;
    font-weight: 600;
    font-size: 1.5em;
    height: 75px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #945854;
    color: white;
    margin: 10px;
    position: absolute;
    top: 7px;
    z-index: -1;
`