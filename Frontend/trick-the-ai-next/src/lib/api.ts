const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function startGame() {
  const res = await fetch(`${apiUrl}/game/start`, {
    method: "POST",
  });
  return res.json();
}

export async function sendMessage(gameId: string, message: string) {
  console.log("Sending message to backend:", { gameId, message });

  const res = await fetch(`${apiUrl}/game/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId, message }),
  });

  const response = res.json();
  console.log(response);
  return response;
}

export async function changeDifficulty(gameId: string, gameMode: string) {
  console.log(
    `attempting to change difficulty to ${gameMode} for gameid: ${gameId}`
  );

  const res = await fetch(`${apiUrl}/game/difficulty`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId, gameMode }),
  });

  const response = res.json();
  console.log(`response to game mode change: ${response}`);

  return response;
}

export async function deleteGame(gameId: string) {
  console.log(`deleting game with id ${gameId}`);

  const res = await fetch(`${apiUrl}/game/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId }),
  });

  const response = res.json();
  console.log(`response status: ${response}`);

  return response;
}
