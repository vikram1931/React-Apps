import React, { useState } from "react";
import languages from "./languages";
export default function AssemblyEndgame() {
  const [currentWord, setCurrentword] = useState("react");
  const [holdGuessLetter, setHoldGuessLetter] = useState([]);

  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  const alphabetsButton = alphabets
    .toUpperCase()
    .split("")
    .map((letter, i) => {
      return (
        <button
          onClick={() => handleLetterClick(letter)}
          type="button"
          key={i}
          className="alphabutton">
          {letter}
        </button>
      );
    });

  function handleLetterClick(letter) {
    // APPROACH 1:
    setHoldGuessLetter((oldGuessLetter) =>
      oldGuessLetter.includes(letter)
        ? oldGuessLetter
        : [...oldGuessLetter, letter],
    );

    /*  
APPROACH 2: 
    if (!holdGuessLetter.includes(letter)) {
      setHoldGuessLetter([...holdGuessLetter, letter]);
    }
    return [...holdGuessLetter]; */

    /*APPROACH 3:    set returns an object, so need to spread it in an array, 
    or we can use array.from to convert from object to array

    setHoldGuessLetter(() => {
      let allHoldletters = [...holdGuessLetter, letter];
      let noduplicateLetters = [...new Set(allHoldletters)];
      return noduplicateLetters;
    });*/

    // APPROACH 4    ...approach 3 and 4 are rerendering
    /*
    setHoldGuessLetter((prevLetter) => {
      const lettersSet = new Set(prevLetter);
      lettersSet.add(letter);
      return Array.from(lettersSet);
    });*/
  }
  console.log(holdGuessLetter);
  const word = currentWord
    .toUpperCase()
    .split("")
    .map((ele, i) => {
      return (
        <span key={i} className="wordspan">
          {ele}
        </span>
      );
    });
  return (
    <main>
      <header>
        <h1>ASSEMBLY:ENDGAME</h1>
        <p>
          {" "}
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!{" "}
        </p>
      </header>
      <section className="game-status">
        <h2>you win</h2>
        <p>Well done !🎉</p>
      </section>
      <section className="languages">
        {languages.map((language, index) => {
          return (
            <div
              key={index}
              className="language"
              style={{
                backgroundColor: language.backgroundColor,
                color: language.color,
              }}>
              {language.name}
            </div>
          );
        })}
      </section>
      <section className="word">{word}</section>
      <section className="sectionalphabet">{alphabetsButton}</section>
      <button type="button" className="new-game">
        New Game
      </button>
    </main>
  );
}
