import React from 'react';
import styled from 'styled-components';
import randomColor from '../randomColor';

const GridBox = styled.div<{ repeat: number; size: number }>`
  display: grid;
  width: 500px;
  height: 500px;
  grid-template-rows: repeat(${(props) => props.repeat}, ${(props) => props.size}px);
  grid-template-columns: repeat(${(props) => props.repeat}, ${(props) => props.size}px);
`;

const Square = styled.div<{ size: number; color: string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  border: 4px solid #ffffff;
`;

function MakeSquare() {
  const stage = 3;
  const countOfSquares = (Math.round((stage + 0.5) / 2) + 1) ** 2;
  const squareRoot = Math.sqrt(countOfSquares);
  const squareArray = Array(countOfSquares)
    .fill(1)
    .map((num, idx) => num + idx);
  const colorIndex = Math.round(Math.random() * randomColor.length);
  const answerSquare = Math.ceil(Math.random() * countOfSquares);
  const squareColor = randomColor[colorIndex];
  const changeColor = squareColor.map((rgb) => {
    let currentColor = rgb;
    if (currentColor + 30 + stage > 255) {
      currentColor -= 30 - stage;
    }
    if (currentColor + 30 + stage <= 255) {
      currentColor += 30 - stage;
    }
    return currentColor;
  });

  return (
    <GridBox repeat={squareRoot} size={500 / squareRoot}>
      {squareArray.map((squareIndex) => (
        <Square
          size={500 / squareRoot}
          color={squareIndex === answerSquare ? `rgb(${changeColor})` : `rgb(${squareColor})`}
          key={squareIndex}
        />
      ))}
    </GridBox>
  );
}

export default MakeSquare;
