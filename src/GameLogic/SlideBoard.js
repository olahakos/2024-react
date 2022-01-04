import { flipMatrix, mirrorMatrixByY } from "../BoardContainer/MatrixHelpers";
import { slideRow } from "./SlideRow";

const slideBoard = (board, direction) => {
    const transformedBoard = transform(board, direction);
    const slidedBoard = transformedBoard.map(row => slideRow(row));
    return transformBack(slidedBoard, direction);
}

const transform = (board, direction) => {
    /**
     * LEFT / Original: 
     * [0]: [1] [2]
     * [1]: [3] [4]
     * 
     * RIGH:
     * [0]: [2] [1]
     * [1]: [4] [3]
     * 
     * UP:
     * [0]: [1] [3]
     * [1]: [2] [4]
     * 
     * Down:
     * [0]: [3] [1]
     * [1]: [4] [2]
     */
    switch(direction) {
        case 'LEFT':
            return board;
            break;
        case 'RIGHT':
            return mirrorMatrixByY(board);
        case 'UP':
            return flipMatrix(board);
        case 'DOWN':
            const flippedBoard = flipMatrix(board);
            return mirrorMatrixByY(flippedBoard);
    }
};

const transformBack = (board, direction) => {
    switch(direction) {
        case 'DOWN':
            const mirroredBoard = mirrorMatrixByY(board);
            return flipMatrix(mirroredBoard);
        default: 
            return transform(board, direction)
    }
};

export {
    slideBoard,
    transform,
}