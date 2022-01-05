import { useEffect, useState } from "react";
import BoardUI from "../BoardUI/BoardUI";
import { BASE, DIMENSION } from "../constants";
import { growingBoard } from "../GameLogic/GrowBoard";
import { slideBoard } from "../GameLogic/SlideBoard";
import { areThemSameMatrixes, compareMatrixes, getEmptyIndexes, getEmptyMatrix } from "./MatrixHelpers";
import { pickTwoIndexes, selectRandom } from "./randomHelpers";

import ArrowKeysReact from "arrow-keys-react/lib/ArrowKeysReact";
import { useSwipeable } from "react-swipeable";

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
            const slidedBoard = slideBoard(board, direction);
            if(areThemSameMatrixes(slidedBoard, board)) return slidedBoard;
            // TODO: End Game?
            return growingBoard(slidedBoard);
        });
    }

    ArrowKeysReact.config({
        left: () => {
            updateBoard('LEFT');
        },
        right: () => {
          updateBoard('RIGHT');
        },
        up: () => {
          updateBoard('UP');
        },
        down: () => {
          updateBoard('DOWN');
        }
      });
      
    const handlers = useSwipeable({
        onSwipedLeft: (eventData) => updateBoard('RIGHT'),
        onSwipedRight: (eventData) => updateBoard('LEFT'),
        onSwipedUp: (eventData) => updateBoard('UP'),
        onSwipedDown: (eventData) => updateBoard('DOWN'),
    });
      

    return (
        <div 
            className="BoardContainer" 
            {...ArrowKeysReact.events} tabIndex="1" 
            {...handlers}
        >
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