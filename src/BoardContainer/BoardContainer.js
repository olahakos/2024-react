import { useEffect, useState } from "react";
import BoardUI from "../BoardUI/BoardUI";
import { BASE, DIMENSION } from "../constants";
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

export const slideBoard = (board, setBoard, direction) => {
    
}

function BoardContainer() {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        const initialBoard = createBoard();
        setBoard(initialBoard)
    }, [createBoard])

    const onClick = () => {
        setBoard( arr => {
            arr[0][0] = 9;
            return [...arr];
        });
    }

    return (
        <div className="BoardContainer">
            <BoardUI
                board={board}
                boardJoin={board.join}
            />
            <button onClick={ onClick } >UP</button>
            <button onClick={ onClick } >DOWN</button>
            <button onClick={ onClick } >LEFT</button>
            <button onClick={ onClick } >RIGHT</button>
        </div>
    );
}
export default BoardContainer;