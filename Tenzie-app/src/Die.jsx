import React from "react";

export default function Die({ dieNum, isHeld, id, hold }) {
  return (
    <button
      onClick={() => hold(id)}
      style={{ backgroundColor: isHeld && "#59E391" }}
      type="button">
      {dieNum}
    </button>
  );
}
