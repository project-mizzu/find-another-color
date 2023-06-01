import React from 'react';

interface GameDataProps {
  stage: number;
  time: number;
  score: number;
}

function Scoreboard({ stage, time, score }: GameDataProps) {
  return (
    <div>
      스테이지 : {stage}, 남은시간 : {time}, 점수 : {score}
    </div>
  );
}

export default Scoreboard;
