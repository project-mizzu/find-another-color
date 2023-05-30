# 다른 색깔 찾기 게임

React 상태관리 라이브러리를 사용하지 않고, 다른 색깔 찾기 게임 만들기
<br>
<br>

## 배포

<hr>
링크(추가 예정)
<br>
<br>
<br>

## 개발 요구 사항

<hr>
<br>

- [ ] React, Typescript 사용
- [ ] Function Component 활용
- [ ] 서버 배포 (Vercel 등)
- [ ] Context, Redux, Mobx, Recoil 등 상태관리 도구 사용 X
      <br>
      <br>
      <br>

## 기능 요구 사항

<hr>
<br>

- [ ] **Math.pow(Math.round((stage + 0.5) / 2) + 1, 2)** 개의 사각형 표시, 그 중 하나만 색깔다름
- [ ] 한 stage의 제한 시간은 15초
- [ ] **정답(색이 다른 사각형)** 을 클릭한 경우 아래 변경사항 적용
  - [ ] 다음 스테이지로 이동
  - [ ] **Math.pow(stage, 3) \* 남은시간** 만큼의 score 누적
- [ ] **오답** 을 클릭한 경우 아래 변경사항 적용
  - [ ] 현재 stage의 남은 시간이 3초 감소
- [ ] 남은 시간이 0초 이하가 되면, 게임 종료
  - [ ] 최종 stage와 누적 score를 출력하고, 새로운 게임 시작 가능
- [ ] stage가 올라갈수록 정답과 오답의 색상 차이 감소
