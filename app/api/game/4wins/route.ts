import { promises as fs } from "fs";

export async function GET() {
  const data = await fs.readFile("/tmp/4game.json", "utf8")
    .catch(() => null);

  if (!data) {
    // initiales Board erzeugen
    const initial = {
      board: Array(6).fill(0).map(() => Array(7).fill(0)),
      currentPlayer: 1,
      winner: null,
      lastUpdate: 0
    };
    await fs.writeFile("/tmp/4game.json", JSON.stringify(initial));
    return Response.json(initial);
  }

  return Response.json(JSON.parse(data));
}
