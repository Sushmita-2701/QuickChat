import { useRef } from "react";

const keySounds = [
  "/sounds/keystroke1.mp3",
  "/sounds/keystroke2.mp3",
  "/sounds/keystroke3.mp3",
  "/sounds/keystroke4.mp3",
];

function useKeyboardSound() {
  const audioRef = useRef(null);

  const playRandomKeyStrokeSound = () => {
    const randomSound = keySounds[Math.floor(Math.random() * keySounds.length)];
    audioRef.current = new Audio(randomSound);
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch((err) => {
      console.warn("Could not play keystroke sound:", err);
    });
  };

  return { playRandomKeyStrokeSound };
}

export default useKeyboardSound;