import { getEmptyIndexes, getMatrixIndexesByCondition, getEmptyMatrix } from "./MatrixHelpers";

describe('getEmptyMatrix', () => {
    test('can create an empty board in the dimension cons', () => {
        const dim = 5;
        const board = getEmptyMatrix(dim);
        expect(board.length).toEqual(dim);
        board.forEach(item => {
            expect(item.length).toEqual(dim);
        });
    });
})

describe('getMatrixIndexesByCondition', () => {
    test('finds the items in the matrix that are null', () => {
        const func = (item) => item === null;
        const board = [
            [null, 2],
            [2, null]
        ];
        const res = [ { i: 0, j: 0 }, { i: 1, j: 1 } ];
        expect(getMatrixIndexesByCondition(board, func)).toEqual(res);
    });

    test('finds the items in the matrix that are === 2', () => {
        const func = (item) => item === 2;
        const board = [
            [null, 2],
            [2, null]
        ];
        const res = [ { i: 0, j: 1 }, { i: 1, j: 0 } ];
        expect(getMatrixIndexesByCondition(board, func)).toEqual(res);
    });
})

describe('getEmptyIndexes', () => {
    test('finds the items in the matrix that are null', () => {
        const board = [
            [null, 2],
            [2, null]
        ];
        const res = [ { i: 0, j: 0 }, { i: 1, j: 1 } ];
        expect(getEmptyIndexes(board)).toEqual(res);
    });
});
