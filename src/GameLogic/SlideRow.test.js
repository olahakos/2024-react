import { slideItem, slideRow } from "./SlideRow";

describe('slideRow', () => {
    test('slide without merge', () => {
        const row = [0, 2, 0, 0];
        const expectation = [2, 0, 0, 0];
        expect(slideRow(row)).toEqual(expectation);
    });

    test('slide with gaps between tiles', () => {
        const row = [0, 2, 0, 4];
        const expectation = [2, 4, 0, 0];
        expect(slideRow(row)).toEqual(expectation);
    });
    test('have an item that stays in place and another slide, but not merge', () => {
        const row = [2, 0, 0, 4];
        const expectation = [2, 4, 0, 0];
        expect(slideRow(row)).toEqual(expectation);
    });

    test('slide with merge in the beginning', () => {
        const row = [2, 0, 0, 2];
        const expectation = [4, 0, 0, 0];
        expect(slideRow(row)).toEqual(expectation);
    });

    test('slide with merge in the middle', () => {
        const row = [2, 4, 4, 0];
        const expectation = [2, 8, 0, 0];
        expect(slideRow(row)).toEqual(expectation);
    });
    test('slide with merge in the end', () => {
        const row = [2, 4, 2, 2];
        const expectation = [2, 4, 4, 0];
        expect(slideRow(row)).toEqual(expectation);
    });

    test('empty row', () => {
        const row = [0, 0, 0, 0];
        const expectation = [0, 0, 0, 0];
        expect(slideRow(row)).toEqual(expectation);
    });

    test('full row, no merge', () => {
        const row = [2, 4, 8, 16];
        const expectation = [2, 4, 8, 16];
        expect(slideRow(row)).toEqual(expectation);
    });
    test('full row, 1 merge', () => {
        const row = [2, 4, 4, 16];
        const expectation = [2, 8, 16, 0];
        expect(slideRow(row)).toEqual(expectation);
    });
    test('full row multiple merge', () => {
        const row = [2, 2, 4, 4];
        const expectation = [4, 8, 0, 0];
        expect(slideRow(row)).toEqual(expectation);
    });
    
});

describe('slideItem', () => {
    test('not moving first item in the row', () => {
        const row = [2, 0, 0, 0];
        const expectation = [2, 0, 0, 0];
        expect(slideItem(row, 0)).toEqual(expectation);
    });
    test('not moving 0 item', () => {
        const row = [2, 0, 0, 0];
        const expectation = [2, 0, 0, 0];
        expect(slideItem(row, 1)).toEqual(expectation);
    });
// slide
    test('slide - till baame first item in the list', () => {
        const row = [0, 2, 0, 0];
        const expectation = [2, 0, 0, 0];
        expect(slideItem(row, 1)).toEqual(expectation);
    });
    test('slide - till the first non-0 item without gap', () => {
        const row = [4, 2, 0, 0];
        const expectation = [4, 2, 0, 0];
        expect(slideItem(row, 1)).toEqual(expectation);
    });
    test('slide - till the first non-0 item with 1 gap', () => {
        const row = [4, 0, 2, 0];
        const expectation = [4, 2, 0, 0];
        expect(slideItem(row, 2)).toEqual(expectation);
    });
    test('slide - till the first non-0 item with multi gaps', () => {
        const row = [4, 0, 0, 2];
        const expectation = [4, 2, 0, 0];
        expect(slideItem(row, 3)).toEqual(expectation);
    });

    test('slide - till the first non-0 item with multi gaps', () => {
        const row = [4, 0, 0, 2];
        const expectation = [4, 2, 0, 0];
        expect(slideItem(row, 3)).toEqual(expectation);
    });
// merge
    test('merge - no gap', () => {
        const row = [2, 2, 0, 0];
        const expectation = ['4_MERGE', 0, 0, 0];
        expect(slideItem(row, 1)).toEqual(expectation);
    });
    test('merge - with gap', () => {
        const row = [2, 0, 2, 0];
        const expectation = ['4_MERGE', 0, 0, 0];
        expect(slideItem(row, 2)).toEqual(expectation);
    });
    test('merge - in the middle', () => {
        const row = [4, 2, 2, 0];
        const expectation = [4, '4_MERGE', 0, 0];
        expect(slideItem(row, 2)).toEqual(expectation);
    });
    test('merge - no double merge', () => {
        const row = [4, 2, 2, 0];
        const expectation = [4, '4_MERGE', 0, 0];
        expect(slideItem(row, 2)).toEqual(expectation);
    });
});