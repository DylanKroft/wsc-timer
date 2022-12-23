import './App.css';
import styled from 'styled-components'
import Timer from './components/Timer';
import Navbar from './components/Navbar';
import Controls from './components/Controls';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import {state} from './state';

function App() {

  const [buttonPressed, setButtonPressed] = useState(null);
  const [stateIndex, setStateIndex] = useState(0);
  const [updatedTime, setUpdatedTime] = useState(0);

  const moveState = () => {
    if (stateIndex === state.length - 1) return;
    setStateIndex(stateIndex + 1);
    setButtonPressed(2);
  }

  const backState = () => {
    setButtonPressed(2);
    if (stateIndex === 0) return;
    setStateIndex(stateIndex - 1);
  }

  const updateTime = (val) => {
    setUpdatedTime(val);
  }

  useEffect(() => {
    if (updateTime !== 0) {
      setTimeout(() => {
        setUpdatedTime(0);
      }, 0)
    }
  }, [updatedTime])

  return (
    <Main>
      <Container>
        <Header/>
        <Timer 
          setUpdatedTime={setUpdatedTime}
          updatedTime={updatedTime}
          moveState={moveState}
          stateWarn={state[stateIndex].warn}
          stateTime={state[stateIndex].time}
          buttonPressed={buttonPressed}
          setButtonPressed={setButtonPressed}
          />
        <Controls 
          updateTime={updateTime}
          moveState={moveState}
          setButtonPressed={setButtonPressed}
          buttonPressed={buttonPressed}
        />
        <Navbar
          moveState={moveState}
          backState={backState}
          stateLabel={state[stateIndex].label}
        />
      </Container>
    </Main>

  );
}

export default App;

const Container = styled.div`
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
`

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: white;
  z-index: -100;
  width: 100vw;
  position: fixed;
  `