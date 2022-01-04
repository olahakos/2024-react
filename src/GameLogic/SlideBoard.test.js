import { slideBoard, transform } from "./SlideBoard";

describe('slideBoard', () => {
    test('LEFT', () => {
        const board = [
            [null, 2, null],
            [2, null, 2],
            [null, null, 2],
        ];
        const expectation = [
            [2, null, null],
            [4, null, null],
            [2, null, null],
        ];
        expect(slideBoard(board, 'LEFT')).toEqual(expectation);
    });
    test('RIGHT', () => {
        const board = [
            [null, 2, null],
            [2, null, 2],
            [null, null, 2],
        ];
        const expectation = [
            [null, null, 2],
            [null, null, 4],
            [null, null, 2],
        ];
        expect(slideBoard(board, 'RIGHT')).toEqual(expectation);
    });
    test('UP', () => {
        const board = [
            [null, 2, null],
            [2, null, 2],
            [null, null, 2],
        ];
        const expectation = [
            [2, 2, 4],
            [null, null, null],
            [null, null, null],
        ];
        expect(slideBoard(board, 'UP')).toEqual(expectation);
    });
    test('DOWN', () => {
        const board = [
            [null, 2, null],
            [2, null, 2],
            [null, null, 2],
        ];
        const expectation = [
            [null, null, null],
            [null, null, null],
            [2, 2, 4],
        ];
        expect(slideBoard(board, 'DOWN')).toEqual(expectation);
    });
});

describe('transform', () => {
    test('LEFT', () => {
        const board = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
        ];
        expect(transform(board, 'LEFT')).toEqual(board);
    });
    test('RIGHT', () => {
        const board = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
        ];
        const expectation = [
            [3,2,1],
            [6,5,4],
            [9,8,7],
        ];
        expect(transform(board, 'RIGHT')).toEqual(expectation);
    });
    test('UP', () => {
        const board = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
        ];
        const expectation = [
            [1,4,7],
            [2,5,8],
            [3,6,9],
        ];
        expect(transform(board, 'UP')).toEqual(expectation);
    });
    test('DOWN', () => {
        const board = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
        ];
        const expectation = [
            [7,4,1],
            [8,5,2],
            [9,6,3],
        ];
        expect(transform(board, 'DOWN')).toEqual(expectation);
    });
});

