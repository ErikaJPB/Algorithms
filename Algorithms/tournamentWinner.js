//O(n) time | O(k) space

function tournamentWinner(competitions, results) {
  let winnerTeam = {
    score: 0,
    name: "",
  };

  let scoreTable = {};

  for (let i = 0; i < competitions.length; i++) {
    let homeTeam = competitions[i][0];
    let awayTeam = competitions[i][1];

    if (results[i] === 0) {
      scoreTable[awayTeam] = (scoreTable[awayTeam] || 0) + 3;
    } else {
      scoreTable[homeTeam] = (scoreTable[homeTeam] || 0) + 3;
    }

    if (scoreTable[awayTeam] >= winnerTeam.score) {
      winnerTeam = { score: scoreTable[awayTeam], name: awayTeam };
    } else if (scoreTable[homeTeam] >= winnerTeam.score) {
      winnerTeam = { score: scoreTable[homeTeam], name: homeTeam };
    }
  }
  return winnerTeam.name;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
