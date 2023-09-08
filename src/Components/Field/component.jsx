import FieldCell from "../Field-cell/component";
import "src/styles/field.css";
import { useEffect, useState } from "react";

const combos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Field() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isWhichTurn, setIsWhichTurn] = useState("x-mark");
  const [isTrue, setIsTrue] = useState(true);
  const [winningMessage, setWinningMessage] = useState(null);
  const message = `now is ${isWhichTurn} turn`;

  function checkForWin() {
    let className = isTrue ? "circle" : "x-mark";

    combos.forEach((combo) => {
      let wins = combo.every((cell) => cells[cell] === className);

      if (wins) {
        setWinningMessage(className + " wins!");
        return;
      }
    });
  }
  useEffect(() => {
    checkForWin();
  }, [cells]);

  return (
    <div className="field">
      <ul
        className="field-list"
        onClick={() => {
          setIsTrue(!isTrue);
        }}
      >
        {cells.map((cell, index) => (
          <FieldCell
            id={index}
            key={index}
            cellsList={cells}
            setterForCells={setCells}
            message={isWhichTurn}
            setterForTurn={setIsWhichTurn}
            winningMessage={winningMessage}
          />
        ))}
      </ul>
      <p className="winning-message">{winningMessage || message}</p>
    </div>
  );
}

export default Field;
