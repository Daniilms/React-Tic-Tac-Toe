import "src/styles/field-cell.css";
import xMark from "src/content/x-mark.png";
import circle from "src/content/circle.png";

function FieldCell({
  cellsList,
  setterForCells,
  id,
  message,
  setterForTurn,
  winningMessage,
}) {
  function putMark(e) {
    const taken =
      !e.target.classList.contains("x-mark") &&
      !e.target.classList.contains("circle");

    if (!winningMessage && taken) {
      if (message === "x-mark") {
        e.target.className += " x-mark";
        e.target.style.backgroundImage = `url(${xMark})`;
        listAllCells("x-mark");
        setterForTurn("circle");
      } else {
        e.target.className += " circle";
        e.target.style.backgroundImage = `url(${circle})`;
        listAllCells("circle");
        setterForTurn("x-mark");
      }
    }
  }

  function listAllCells(className) {
    const allCells = cellsList.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setterForCells(allCells);
  }

  return <li id={id} key={id} className="field-cell" onClick={putMark}></li>;
}

export default FieldCell;
