import { getEmptyIndexes } from "../BoardContainer/MatrixHelpers"
import { selectRandom } from "../BoardContainer/randomHelpers";
import { BASE } from "../constants";

const growingBoard = (board) => {
    const newBoard = board.map(row => [...row]);
    const emptyIndexes = getEmptyIndexes(board);
    const newIndex = selectRandom(emptyIndexes);
    const newValue = selectRandom([BASE, BASE * BASE]);
    newBoard[newIndex.i][newIndex.j] = newValue;
    return newBoard;
}

export {
    growingBoard,
}