import React, { useState, useRef, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import confetti from "canvas-confetti";
function generateAllNewDice() {
  let randomNum = new Array(10).fill(0).map((ele) => ({
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid(),
  }));

  return randomNum;
}

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());
  const buttonRef = useRef(null); // useRef is useful for accessing DOMNode property, eg:focus

  //console.log(buttonRef); // we find list of attributes like onfocus, onblur etc

  // we need to use useEffect()  to get the external stuff

  /* Another approach
    
    let newDice = []

    for(let i=1;i<11;i++){
    let rand = Math.ceil(Math.random() * 6)
    rewDice.push(rand)
    }
    return newDice
    */

  const allHeld = dice.every((obj) => obj.isHeld);
  const allSameValue = dice.every((obj) => obj.value === dice[0].value);
  const gameWon = allHeld && allSameValue;

  useEffect(() => {
    if (gameWon && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  gameWon && confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });

  const diceElements = () => {
    return dice.map((dieObj, i) => {
      return (
        <Die
          key={dieObj.id}
          dieNum={dieObj.value}
          isHeld={dieObj.isHeld}
          id={dieObj.id}
          hold={hold}
        />
      );
    });
  };

  const rollDice = () => {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
        ),
      );
    } else {
      setDice(generateAllNewDice());
    }
  };

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        id === die.id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }
  /*
  const newGame = () => {
    setDice(generateAllNewDice());
  };

  const handleReset = () => {
    if (gameWon) {
      newGame();
    } else {
      rollDice();
    }
  };
*/
  return (
    <main>
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! you won! Press 'New Game' to start again</p>
        )}
      </div>
      <div className="dice-container">{diceElements()}</div>

      <button
        ref={buttonRef}
        className="roll-dice"
        type="button"
        onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
