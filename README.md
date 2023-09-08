# Overview

This document is for describing the data flow of SmoothTV

## Step 1. Sending events from the Scoreboard app

### Match Start event
```js
const matchStartEvent: MatchEvent = {
  timestamp: new Date(),
  matchId: 1,
  inGameTime: 0,
  type: MatchEventType.MATCH_START,
};
```

### Point event
```js
const pointEvent: PointEvent = {
  timestamp: new Date(),
  matchId: 1,
  playerId: 1,
  inGameTime: 10,
  type: PointEventType.POINT,
  value: 3,
};
```

## Step 2. Backend writing event to Firestore


## Step X. Creating match

```js
const player1: Player = {
  id: 1,
  name: "Ralf Carneborn",
};

const player2: Player = {
  id: 2,
  name: "Craig Jones",
};

export const testMatch: Match = {
  matchId: 1,
  startDate: new Date(),
  players: [player1, player2],
  events: [],
};
```


