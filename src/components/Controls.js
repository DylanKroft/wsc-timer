import React, { useEffect } from 'react'
import styled from 'styled-components'
import PlayButton from './PlayButton'
import RewindButton from './RewindButton'

const Controls = ({setButtonPressed, buttonPressed}) => {

  return (
    <Container>
      <PlayButton
        setButtonPressed={setButtonPressed}
        buttonPressed={buttonPressed}
        title={"Start"}
      />
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