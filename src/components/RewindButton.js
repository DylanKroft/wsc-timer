import React, { useState } from 'react'
import styled from 'styled-components'
import { VscDebugRestart } from 'react-icons/vsc';
import { IconContext } from "react-icons";

const RewindButton = ({setButtonPressed}) => {


  const handleClick = () => {
    setButtonPressed(2);
  }

  return (
    <Container onClick={handleClick}>
      <VscDebugRestart style={{ stroke: "white", strokeWidth: "0.35", fontSize: "1.6em"}}/>
    </Container>
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
        scale: 0.85;
        cursor: pointer;
    }
`