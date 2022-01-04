import { useEffect, useState } from "react";
import BoardUI from "../BoardUI/BoardUI";
import { BASE, DIMENSION } from "../constants";
import { slideBoard } from "../GameLogic/SlideBoard";
import { getEmptyIndexes, getEmptyMatrix } from "./MatrixHelpers";
import { pickTwoIndexes, selectRandom } from "./randomHelpers";

const initBoard = () => {

}

export const createBoard = (dim = DIMENSION, bas = BASE) => {
    const arr = getEmptyMatrix(dim);
    const emptys = getEmptyIndexes(arr);
    const [ind1, ind2] = pickTwoIndexes(emptys);

    arr[ind1.i][ind1.j] = selectRandom([bas, bas*bas]);
    arr[ind2.i][ind2.j] = selectRandom([bas, bas*bas]);
    return arr;
}

function BoardContainer() {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        const initialBoard = createBoard();
        setBoard(initialBoard)
    }, [createBoard])

    const updateBoard = (direction) => {
        setBoard( () => {
            return slideBoard(board, direction);;
        });
    }

    return (
        <div className="BoardContainer">
            <BoardUI
                board={board}
                boardJoin={board.join}
            />
            <button onClick={ () => updateBoard('UP')} >UP</button>
            <button onClick={ () => updateBoard('DOWN')} >DOWN</button>
            <button onClick={ () => updateBoard('LEFT')} >LEFT</button>
            <button onClick={ () => updateBoard('RIGHT')} >RIGHT</button>
        </div>
    );
}
export default BoardContainer;