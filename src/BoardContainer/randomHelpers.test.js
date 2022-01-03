import { pickTwoIndexes, selectRandom } from "./randomHelpers";

describe('selectRandom', () => {
    test('undefined - can handle undefined input', () => {
        expect(selectRandom()).toBeNull;
    })
    test('string - for string, returns with null', () => {
        expect(selectRandom('hello')).toBeNull;
    })
    test('[int] - returns within array length', () => {
        const arr = [9,2,77,12];
        expect(arr).toContain(selectRandom(arr));
    })
    test('[string] - for string, returns with null', () => {
        const arr = ['9',2,'77 seven',12];
        expect(arr).toContain(selectRandom(arr));
    })
})

describe('pickTwoIndexes', () => {
    test('undefined - can handle undefined input', () => {
        expect(pickTwoIndexes()).toBeNull;
    })
    test('[int] - returns within array length', () => {
        const arr = [9,2,77,12];
        const [ind1, ind2] = pickTwoIndexes(arr)
        expect(arr).toContain(ind1);
        expect(arr).toContain(ind2);
        expect(ind1).not.toEqual(ind2)
    })
    test('[string] - for string, returns with null', () => {
        const arr = ['9',2,'77 seven',12];
        const [ind1, ind2] = pickTwoIndexes(arr)
        expect(arr).toContain(ind1);
        expect(arr).toContain(ind2);
        expect(ind1).not.toEqual(ind2)
    })
})