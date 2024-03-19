/* eslint-disable react/prop-types */
import { useState, useCallback } from "react";

const UserCallbackComp = () => {
  const [player, setPlayer] = useState("");
  const [players, setPlayers] = useState(["Messi", "Ronaldo", "Laspada"]);

  function handleChangeInput(event) {
    setPlayer(event.target.value);
  }

  function handleAddPlayer() {
    setPlayers(players.concat(player));
  }

  const handleRemovePlayer = useCallback(
    (player) => {
      setPlayers(players.filter((p) => p !== player));
    },
    [players]
  );

  return (
    <>
        <h2>useCallBack Component</h2>
      <input onChange={handleChangeInput} />
      <button onClick={handleAddPlayer}>Add Player</button>
      <PlayerList players={players} handleRemovePlayer={handleRemovePlayer} />
    </>
  );
};

// eslint-disable-next-line react/prop-types
function PlayerList({ players, handleRemovePlayer }) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <ul>
      // eslint-disable-next-line react/prop-types, react/prop-types, react/prop-types
      {players.map((player) => (
        <li key={player} onClick={() => handleRemovePlayer(player)}>
          {player}
        </li>
      ))}
    </ul>
  );
}
export default UserCallbackComp;
