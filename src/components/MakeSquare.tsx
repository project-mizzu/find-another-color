import React, { useState } from 'react';
import styled from 'styled-components';
import Scoreboard from './Scoreboard';
import randomColor from '../randomColor';

const GridBox = styled.div<{ repeat: number; size: number }>`
  display: grid;
  width: 500px;
  height: 500px;
  grid-template-rows: repeat(${(props) => props.repeat}, ${(props) => props.size}px);
  grid-template-columns: repeat(${(props) => props.repeat}, ${(props) => props.size}px);
  box-sizing: border-box;
`;

const Square = styled.div<{ size: number; color: string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  border: 3px solid #ffffff;
  box-sizing: border-box;
`;

function MakeSquare() {
  const [stage, setStage] = useState(1);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const countOfSquares = (Math.round((stage + 0.5) / 2) + 1) ** 2;
  const squareRoot = Math.sqrt(countOfSquares);
  const squareArray = Array(countOfSquares)
    .fill(0)
    .map((num, idx) => num + idx);
  const colorIndex = Math.floor(Math.random() * randomColor.length);
  const answerSquare = Math.floor(Math.random() * countOfSquares);
  const squareColor = randomColor[colorIndex];

  // [버그잡기] changeColor 함수 런타임 에러
  // const changeColor = squareColor.map((rgb) => {
  //   let currentColor = rgb;
  //   if (currentColor + 30 + stage > 255) {
  //     currentColor -= 30 - stage;
  //   }
  //   if (currentColor + 30 + stage <= 255) {
  //     currentColor += 30 - stage;
  //   }
  //   return currentColor;
  // });

  const clickEvt = (e: React.MouseEvent) => {
    const answer = +e.currentTarget.classList[2];
    if (answerSquare === answer) {
      setStage((prev) => prev + 1);
      setScore((prev) => prev + stage ** 3 * time);
    }
  };

  return (
    <>
      <Scoreboard stage={stage} time={15} score={score} />
      <GridBox repeat={squareRoot} size={500 / squareRoot}>
        {squareArray.map((squareIndex) => (
          <Square
            size={500 / squareRoot}
            color={squareIndex === answerSquare ? 'gray' : `rgb(${squareColor})`}
            key={squareIndex}
            className={`${squareIndex}`}
            onClick={clickEvt}
          />
        ))}
      </GridBox>
    </>
  );
}

export default MakeSquare;
