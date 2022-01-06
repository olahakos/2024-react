import { saveBoard } from "./LocalDB";

describe('saveBoard', () => {
    test('saving a matrix', () => {
        const board = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]
        expect(saveBoard(board)).toBeTruthy
    });
});