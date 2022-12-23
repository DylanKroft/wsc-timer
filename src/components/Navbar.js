import React from 'react'
import styled from 'styled-components'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IconContext } from "react-icons";

const Navbar = ({stateLabel, moveState, backState}) => {


  return (
    <Container>
      <Toggle onClick={backState}>
        <IconContext.Provider
            value={{ color: 'white', size: '2em' }}
        >
          <div>
              <IoIosArrowBack />
          </div>
        </IconContext.Provider>
      </Toggle>
      <CurrentState>
        {stateLabel}
      </CurrentState>
      <Toggle onClick={moveState}>
        <IconContext.Provider
          value={{ color: 'white', size: '2em' }}
        >
          <div>
              <IoIosArrowForward />
          </div>
        </IconContext.Provider>
      </Toggle>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    background-color: gray;
    width: 100%;
    height: 75px;
    background-color: rgb(90, 21, 18);
    display: flex;
    align-items: center;
    justify-content: center;
`

const CurrentState = styled.div`
  font-weight: 600;
  color: white;
  font-size: 1.5em;
  flex: 4;
  border: 1px solid white;
  border-bottom: none;
  border-top: none;;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Toggle = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  background-color: rgb(90, 21, 18);
  cursor: pointer;
  transition-duration: 0.2s;

    :active {
        scale: 0.85;
        cursor: pointer;
        filter: brightness(1.2);
    }
`