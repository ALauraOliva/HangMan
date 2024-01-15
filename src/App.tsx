import { useState } from "react";
import words from "./assets/wordList.json";
import { HangManDrawing } from "./components/HangManDrawing";
import { HangManWord } from "./components/HangManWord";
import { KeyBoard } from "./components/KeyBoard";

function App() {
  const [WordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [GuessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangManDrawing />
      <HangManWord />
      <KeyBoard />
    </div>
  );
}

export default App;
