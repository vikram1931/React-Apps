import React, { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
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
  console.log(nanoid);
  /* Another approach
    
    let newDice = []

    for(let i=1;i<11;i++){
    let rand = Math.ceil(Math.random() * 6)
    rewDice.push(rand)
    }
    return newDice
    */

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
    //  setDice(generateAllNewDice());

    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
      ),
    );
  };

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        id === die.id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  return (
    <main>
      <div className="dice-container">{diceElements()}</div>
      <button className="roll-dice" type="button" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
