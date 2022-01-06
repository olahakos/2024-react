import { BASE, DIMENSION } from "../constants";
import { getEmptyIndexes, getEmptyMatrix } from "./MatrixHelpers";
import { pickTwoIndexes, selectRandom } from "./randomHelpers";

const createBoard = (dim = DIMENSION, bas = BASE) => {
    const arr = getEmptyMatrix(dim);
    const emptys = getEmptyIndexes(arr);
    const [ind1, ind2] = pickTwoIndexes(emptys);

    arr[ind1.i][ind1.j] = selectRandom([bas, bas*bas]);
    arr[ind2.i][ind2.j] = selectRandom([bas, bas*bas]);
    return arr;
}

export {
    createBoard,
}