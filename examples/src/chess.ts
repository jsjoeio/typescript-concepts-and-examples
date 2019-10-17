// An exercise from Chapter 5 on "Classes and Interfaces" in _Programming TypeScript_

// Represents a game of chess

type ChessPieceColor = "Black" | "White";
// In ches,, they use standard algebraic notation
// the x-axis are called "Files"
// the y-axis are called "Ranks"
// Normally called File, but conflicts with File in browser
// So we opted for ChessFile
type ChessFile = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Position {
  constructor(private file: ChessFile, private rank: Rank) {}
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    };
  }
}

abstract class Piece {
  protected position: Position;
  constructor(
    private readonly color: ChessPieceColor,
    file: ChessFile,
    rank: Rank
  ) {
    this.position = new Position(file, rank);
  }
  moveTo(position: Position) {
    this.position = position;
  }
  abstract canMoveTo(position: Position): boolean;
}

// There are 6 types of pieces
class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}

class Game {
  private static makePieces() {
    return [
      // Kings
      new King("White", "E", 1),
      new King("Black", "E", 8)
    ];
  }
  private pieces = Game.makePieces();
}
