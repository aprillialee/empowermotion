import React, { useEffect, useState } from "react";

import styled from "styled-components";

function Timer() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`06/02/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const { days, seconds, hours, minutes } = timeLeft;

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}
      </span>
    );
  });

  return (
    <TimerStyled>
      <TimerContainer>
        <Time>{days}</Time>
        <Text>DAYS</Text>
      </TimerContainer>
      <TimerContainer>
        <Time>{hours}</Time>
        <Text>HOURS</Text>
      </TimerContainer>
      <TimerContainer>
        <Time>{minutes}</Time>
        <Text>MINUTES</Text>
      </TimerContainer>
      <TimerContainer>
        <Time>{seconds}</Time>
        <Text>SECONDS</Text>
      </TimerContainer>
    </TimerStyled>
  );
}

const TimerStyled = styled.div`
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: -60px;
  width: 35%;
  height: 15%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  z-index: 100;

  @media (max-width: 1024px) {
    height: 10%;
    width: 70%;
  }

  @media (max-width: 414px) {
    position: absolute;
    margin-top: 300px;
  }
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
`;

const Time = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 4vw;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Text = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 0.8vw;
  color: white;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default Timer;
