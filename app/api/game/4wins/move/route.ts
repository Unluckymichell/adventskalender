import { promises as fs } from "fs";

export async function POST(req: Request) {
    const { column, lastUpdate } = await req.json();
    const data = JSON.parse(await fs.readFile("/tmp/4game.json", "utf8"));

    if (data.winner) return Response.json(data);

    const [row, col] = placePiece(data.board, column, data.currentPlayer) ?? [];

    if (row === undefined) return Response.json(data); // column full

    if (checkWin(data.board, row, col)) {
        data.winner = data.currentPlayer;
    }

    data.currentPlayer = data.currentPlayer === 1 ? 2 : 1;
    data.lastUpdate = lastUpdate;
    await fs.writeFile("/tmp/4game.json", JSON.stringify(data));

    return Response.json(data);
}

function placePiece(board: number[][], col: number, player: number) {
    for (let row = 5; row >= 0; row--) {
        if (board[row][col] === 0) {
            board[row][col] = player;
            return [row, col];
        }
    }
    return null; // column full
}

function checkWin(board: number[][], row: number, col: number): boolean {
    const player = board[row][col];
    if (!player) return false;


    const directions = [
        [0, 1], // horizontal
        [1, 0], // vertical
        [1, 1], // diagonal down-right
        [1, -1], // diagonal down-left
    ];


    for (const [dr, dc] of directions) {
        let count = 1;


        // forward
        let r = row + dr;
        let c = col + dc;
        while (board[r]?.[c] === player) {
            count++;
            r += dr;
            c += dc;
        }


        // backward
        r = row - dr;
        c = col - dc;
        while (board[r]?.[c] === player) {
            count++;
            r -= dr;
            c -= dc;
        }


        if (count >= 4) return true;
    }


    return false;
}