import { createBoard } from "./BoardContainer";

describe('createBoard', () => {
    let board;
    const dim = 4;
    const bas = 2;
    beforeAll(() => {
        board = createBoard(dim,2);
    })
    test('can create an empty board in the dimension cons', () => {
        expect(board.length).toEqual(dim);
        board.forEach(item => {
            expect(item.length).toEqual(dim);
        });
    });
    test('creates 2 random numbers in the empty board', () => {
        let notNull = 0;
        board.forEach( row => {
            row.forEach( item => {
                if (item !== null) notNull++;
            })
        })
        expect(notNull).toEqual(2);
    });
});