import React, { useEffect, useRef, useState, useReducer } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({buttonPressed, setButtonPressed, stateTime, moveState, stateWarn}) => {

    const [isActive, setIsActive] = useState(false);
    const [key, setKey] = useState(0);
    const [alertColor, setAlertColor] = useState("#5a1512");

    useEffect(() => {
        if (buttonPressed) {
            handleButtonPress(buttonPressed);
        }
    }, [buttonPressed])



    const handleButtonPress = (pressed) => {
        if (pressed) {
            if (pressed === 1) {
                handleActiveState();
            }

            else if (pressed === 2) {
                handleResetTimer();
            }
        }
    }

    const handleStateChange = () => {
        moveState();

        const canVibrate = window.navigator.vibrate;
        if (canVibrate) window.navigator.vibrate(100);
        
        alert("Times up!");
    }

    const handleResetTimer = () => {
        setButtonPressed(null);
        setKey(prevKey => prevKey + 1);
        handlePauseClick();
    }

    const handlePauseClick = () => {
        setButtonPressed(null);
        setIsActive(false);
    }

    const handleStartClick = () => {
        setButtonPressed(null);
        setIsActive(true);
    }

    const handleActiveState = () => {
        if (!isActive) {
            handleStartClick();
        } else {
            handlePauseClick();
        }
    }

    const children = ({ remainingTime }) => {
        let minutes = Math.floor(remainingTime / 60)
        let seconds = remainingTime % 60
        if (seconds < 10) seconds = "0" + seconds;

        if (stateWarn && minutes <= 0) {
            setAlertColor("#A30000");
        }
      
        return `${minutes}:${seconds}`
      }

    return (
        <Container alertColor={alertColor}>
            <CountdownCircleTimer
            size={300}
            key={key}
            children={() => children}
            strokeWidth={32}
            isPlaying={isActive}
            duration={stateTime}
            colors={['#5a1512', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[stateTime, stateTime/2, stateTime/4, 0]}
            onComplete={handleStateChange}
            >
                {children}
            </CountdownCircleTimer>
        </Container>
    )
}

export default Timer

const Container = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1;
    font-size: 3.5em;
    font-weight: 800;
    color: ${props => props.alertColor || "#5a1512"};
`