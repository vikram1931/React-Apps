import React, { useState } from "react";
import Die from "./Die";
export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  const generateAllNewDice = () => {
    let randomNum = new Array(10)
      .fill(0)
      .map((ele) => Math.ceil(Math.random() * 6));

    return randomNum;
    /* Another approach
    
    let newDice = []

    for(let i=1;i<11;i++){
    let rand = Math.ceil(Math.random() * 6)
    rewDice.push(rand)
    }
    return newDice
    */
  };

  return (
    <main>
      <div className="dice-container">
        <Die />
      </div>
    </main>
  );
}
