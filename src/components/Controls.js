import React, { useEffect } from 'react'
import styled from 'styled-components'
import PlayButton from './PlayButton'
import RewindButton from './RewindButton'

const Controls = ({setButtonPressed, buttonPressed, updateTime}) => {

  return (
    <Container>
      <PlayButton
        setButtonPressed={setButtonPressed}
        buttonPressed={buttonPressed}
        title={"Start"}
      />
      <ButtonBox>
        <Main><Button onClick={() => updateTime(10)}>+10</Button><Shadow/></Main>
        
        <Main><Button onClick={() => updateTime(-10)}>-10</Button><Shadow/></Main>

      </ButtonBox>
      <RewindButton
        setButtonPressed={setButtonPressed}
        buttonPressed={buttonPressed}
      />
    </Container>
  )
}

export default Controls

const Container = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    align-items: top;
    justify-content: center;
`

const Button = styled.div`
  border-radius: 500px;
    font-weight: 600;
    font-size: 1.5em;
    height: 34px;
    aspect-ratio: 2.25;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(90, 21, 18);
    color: white;
    transition-duration: 0.2s;
    cursor: pointer;
    margin-top: 10px;

    :active {
        transform: translateY(5px);
        cursor: pointer;
    }
`

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;
  height: 75px;
`
const Main = styled.div`
  height: 100%;
  position: relative;
  
`

const Shadow = styled.div`
    border-radius: 100px;
    font-weight: 600;
    font-size: 1.5em;
    height: 34px;
    aspect-ratio: 2.25;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #945854;
    color: white;
    position: absolute;
    top: 15px;
    z-index: -1;
`