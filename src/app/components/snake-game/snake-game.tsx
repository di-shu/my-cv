'use client'
import { useEffect, useRef, useState } from "react";
import styles from "./snake-game.module.css";

const CELL_SIZE = 20; // Size of each cell in pixels
const CANVAS_WIDTH = 239; // Width of the canvas
const CANVAS_HEIGHT = 405; // Height of the canvas
const initialSnake = [[4, 10], [4, 10]];

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [direction, setDirection] = useState([0, -1])
  const [snake, setSnake] = useState(initialSnake)

  const setSnakeDirection = (e) => {
    console.log(e)
  }

  return (
    <div className={styles.game_snake} onKeyDown={e => setSnakeDirection(e)}>
      <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      {isGameOver && <div className={styles.game_over}>Game Over</div>}
    </div>
  );
}
