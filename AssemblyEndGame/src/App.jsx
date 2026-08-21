import React, { useState } from "react";
import languages from "./languages";
export default function AssemblyEndgame() {
  const [currentWord, setCurrentword] = useState("react");

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
    </main>
  );
}
