import React, { useState } from "react";
import Die from "./Die";

function generateAllNewDice() {
  let randomNum = new Array(10)
    .fill(0)
    .map((ele) => ({ value: Math.ceil(Math.random() * 6), isHeld: false }));

  return randomNum;
}

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  /* Another approach
    
    let newDice = []

    for(let i=1;i<11;i++){
    let rand = Math.ceil(Math.random() * 6)
    rewDice.push(rand)
    }
    return newDice
    */

  const diceElements = () => {
    return dice.map((dieNum, i) => {
      return <Die key={i} dieNum={dieNum.value} />;
    });
  };

  const rollDice = () => {
    setDice(generateAllNewDice());
  };

  return (
    <main>
      <div className="dice-container">{diceElements()}</div>
      <button className="roll-dice" type="button" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
