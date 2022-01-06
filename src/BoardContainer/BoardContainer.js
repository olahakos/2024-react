import { useEffect, useState } from "react";
import BoardUI from "../BoardUI/BoardUI";
import { BASE, DIMENSION } from "../constants";
import { growingBoard } from "../GameLogic/GrowBoard";
import { slideBoard } from "../GameLogic/SlideBoard";
import { areThemSameMatrixes, getEmptyIndexes, getEmptyMatrix } from "./MatrixHelpers";
import { pickTwoIndexes, selectRandom } from "./randomHelpers";

import ArrowKeysReact from "arrow-keys-react/lib/ArrowKeysReact";
import { useSwipeable } from "react-swipeable";
import { getBoard, saveBoard } from "../LocalDB/LocalDB";

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
        let initialBoard = getBoard();
        if(!initialBoard){
            initialBoard = createBoard();
        }
        setBoard(initialBoard);
    }, [getBoard, createBoard])

    const updateBoard = (direction) => {
        setBoard( () => {
            const slidedBoard = slideBoard(board, direction);
            if(areThemSameMatrixes(slidedBoard, board)) return slidedBoard;
            // TODO: End Game?
            const grownBoard = growingBoard(slidedBoard);
            saveBoard(grownBoard);
            return grownBoard;
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
        onSwipedLeft: (eventData) => updateBoard('LEFT'),
        onSwipedRight: (eventData) => updateBoard('RIGHT'),
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
        </div>
    );
}
export default BoardContainer;