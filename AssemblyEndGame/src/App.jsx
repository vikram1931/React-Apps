import React, { useState } from "react";
import clsx from "clsx";
import languages from "./languages";
import { getFarewellText, getRandomWords } from "./utils";
export default function AssemblyEndgame() {
  const [currentWord, setCurrentword] = useState(getRandomWords);
  const [holdGuessLetter, setHoldGuessLetter] = useState([]);

  const wrongGuessCount = holdGuessLetter.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  //conditional rendering of button

  const GameWon = currentWord
    .split("")
    .every((letter) => holdGuessLetter.includes(letter));
  const GameLost = wrongGuessCount >= languages.length - 1;
  let isGameOver = GameWon || GameLost;
  let NewGameButton = isGameOver && (
    <button onClick={() => handleNewGame()} type="button" className="new-game">
      New Game
    </button>
  );
  const handleNewGame = () => {
    setCurrentword(getRandomWords);
    setHoldGuessLetter([]);
  };
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  //className={clsx(state && 'bg-red-500 hover:bg-red-600')}

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

  const word = currentWord.split("").map((letter, i) => {
    return (
      <span key={i} className="wordspan">
        {holdGuessLetter.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    );
  });

  const alphabetsButton = alphabets.split("").map((letter, i) => {
    const isGuessed = holdGuessLetter.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    const className = clsx({ correct: isCorrect, wrong: isWrong });

    return (
      <button
        disabled={isGameOver}
        aria-disabled={isGameOver}
        className={className}
        onClick={() => handleLetterClick(letter)}
        type="button"
        key={i}>
        {letter.toUpperCase()}
      </button>
    );
  });

  //const initialMessage = <h2>Begin the game</h2>;

  const winMessage = GameWon && (
    <>
      <h2>you win</h2>
      <p>Well done !🎉</p>
    </>
  );

  const lostMessage = GameLost && (
    <>
      <h2>you lose!</h2> <p>Better luck!</p>
    </>
  );

  const fareWellText = languages.map((language, index) => {
    const isLanguageLost = index === wrongGuessCount - 1;
    return (
      isLanguageLost && (
        <p className="farewell-message" key={index}>
          {getFarewellText(language.name)}
        </p>
      )
    );
  });
  const winLoseColor = clsx("game-status", {
    "game-status-green": GameWon,
    "game-status-red": GameLost,
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
      <section className={winLoseColor}>
        {GameWon && winMessage}
        {GameLost && lostMessage}
        {!GameWon && !GameLost && fareWellText}
      </section>
      <section className="languages">
        {languages.map((language, index) => {
          const isLanguageLost = index < wrongGuessCount;

          return (
            <div
              key={index}
              className={`language ${isLanguageLost ? "lost" : ""}`}
              style={{
                backgroundColor: language.backgroundColor,
                color: language.color,
              }}>
              {language.name}
            </div>
          );
        })}
      </section>
      <section className="word">
        {!isGameOver
          ? word
          : currentWord.split("").map((letter, index) => {
              return (
                <span key={index} className="wordspan">
                  {letter}
                </span>
              );
            })}
      </section>
      <section className="sectionalphabet">{alphabetsButton}</section>
      {NewGameButton}
    </main>
  );
}
