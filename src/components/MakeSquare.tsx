import React from 'react';
import styled from 'styled-components';

const GridBox = styled.div<{ repeat: number; size: number }>`
  display: grid;
  width: 500px;
  height: 500px;
  grid-template-rows: repeat(${(props) => props.repeat}, ${(props) => props.size}px);
  grid-template-columns: repeat(${(props) => props.repeat}, ${(props) => props.size}px);
`;

const Square = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: yellow;
  border: 4px solid gray;
`;

function MakeSquare() {
  const stage = 1;
  const numberOfSquares = (Math.round((stage + 0.5) / 2) + 1) ** 2;
  const squareRoot = Math.sqrt(numberOfSquares);
  const squareArray = Array(numberOfSquares)
    .fill(1)
    .map((num, idx) => num + idx);

  return (
    <GridBox repeat={squareRoot} size={500 / squareRoot}>
      {squareArray.map((number) => (
        <Square size={500 / squareRoot} key={number}>
          {number}
        </Square>
      ))}
    </GridBox>
  );
}

export default MakeSquare;
