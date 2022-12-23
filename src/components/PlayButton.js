import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaPlay, FaPause } from 'react-icons/fa';
import { IconContext } from "react-icons";

const PlayButton = ({title, setButtonPressed, buttonPressed}) => {

  const [active, setActive] = useState(false);
  const [firstClicked, setFirstClicked] = useState(false)

  const handleClick = () => {
    setButtonPressed(1);
    setFirstClicked(true);
    setActive(!active);
  }

  useEffect(() => {
    if (buttonPressed === 2) {
        reset();
    }
  }, [buttonPressed])

  const reset = () => {
    setActive(false);
  }

  return (
    <Container onClick={handleClick}>
        {!firstClicked && <>{title}</>}
        {active &&
            <IconContext.Provider
                value={{ color: 'white', size: '1.5em' }}
                >
                <div>
                    <FaPause />
                </div>
            </IconContext.Provider>
        }

        {!active && firstClicked && 
            <IconContext.Provider
                value={{ color: 'white', size: '1.5em' }}
                >
                <div>
                    <FaPlay />
                </div>
            </IconContext.Provider>
        }
    </Container>
  )
}

export default PlayButton

const Container = styled.div`
    border-radius: 100px;
    font-weight: 600;
    font-size: 1.5em;
    height: 75px;
    width: 150px;
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