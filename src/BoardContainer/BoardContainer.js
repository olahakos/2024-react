import { useEffect, useState } from "react";
import BoardUI from "../UI/BoardUI";
import { growingBoard } from "../GameLogic/GrowBoard";
import { slideBoard } from "../GameLogic/SlideBoard";
import { areThemSameMatrixes } from "./MatrixHelpers";

import ArrowKeysReact from "arrow-keys-react/lib/ArrowKeysReact";
import { useSwipeable } from "react-swipeable";
import { getBoard, saveBoard } from "../LocalDB/LocalDB";
import { Menu } from "../UI/Menu";
import { createBoard } from "./boardHelpers";

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
            <Menu setBoard={setBoard}/>
        </div>
    );
}
export default BoardContainer;