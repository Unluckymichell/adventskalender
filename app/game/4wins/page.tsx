"use client";
import { useEffect, useState } from "react";

interface GameState {
    board: number[][];
    currentPlayer: number;
    winner: number | null;
    lastUpdate: number;
}

export default function G4winsPage() {
    const [game, setGame] = useState<GameState | null>(null);

    // poll game state every 1s
    useEffect(() => {
        const load = async () => {
            const res = await fetch("/api/game/4wins");
            const json = await res.json();
            setGame(g => (json.lastUpdate == 0 || !g || json.lastUpdate > g.lastUpdate ? json : g));
        };
        load();
        const t = setInterval(load, 2000);
        return () => clearInterval(t);
    }, []);


    if (!game) return <div>Loading…</div>;


    const makeMove = async (col: number) => {
        if(game.winner) return;

        setGame((g) => !g ? null : ({
            ...g,
            lastUpdate: Date.now() - 100,
            currentPlayer: g.currentPlayer === 1 ? 2 : 1,
            board: placePiece(g.board.map(a => [...a]), col, g.currentPlayer)
        }));
        await fetch("/api/game/4wins/move", {
            method: "POST",
            body: JSON.stringify({ column: col, lastUpdate: Date.now() }),
        });
    };

    return (
        <div className="min-h-screen p-6 text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold underline mb-4">4 Gewinnt</h1>
            {!game.winner ? (
                <h2 className="my-1 font-bold text-green-400">Spieler {game.currentPlayer} ist dran.</h2>
            ) : null}
            {game.winner && <h2 className="my-1 font-bold text-amber-100 text-lg">Spieler <span className={game.winner === 1 ? "text-red-500" : "text-yellow-500"}>{game.winner}</span> hat gewonnen!</h2>}
            <div className="p-2 grid gap-1 w-fit bg-green-900 rounded-xl"
                style={{
                    // display: "grid",
                    gridTemplateColumns: `repeat(${game.board[0].length}, 45px)`,
                    // gap: 4,
                    opacity: game.winner ? 0.5 : 1  
                }}
            >
                {game.board.map((row, rIndex) =>
                    row.map((cell, cIndex) => (
                        <div
                            key={`${rIndex}-${cIndex}`}
                            onClick={() => makeMove(cIndex)}
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: "50%",
                                background: cell === 0 ? "#222" : cell === 1 ? "red" : "yellow",
                                border: "2px solid #111",
                                cursor: "pointer",
                            }}
                        />
                    ))
                )}
            </div>

            <button className="bg-red-900 m-2 py-2 px-6 rounded-2xl border-2 border-white" onClick={async () => {
                await fetch("/api/game/4wins/reset", {
                    method: "POST",
                });
                setGame(g => ({
                    board: Array(6).fill(0).map(() => Array(7).fill(0)),
                    currentPlayer: 1,
                    winner: null,
                    lastUpdate: Date.now()
                }));
            }}>Reset</button>

            <p className="absolute bottom-4 left-1 text-gray-800">{game.lastUpdate}</p>
        </div>
    );
}

function placePiece(board: number[][], col: number, player: number) {
    for (let row = 5; row >= 0; row--) {
        if (board[row][col] === 0) {
            board[row][col] = player;
            return board;
        }
    }
    return board; // column full
}