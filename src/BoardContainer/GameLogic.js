import { BASE } from "../constants";

const slideRow = (row) => {
    let newRow = [...row];
    for(let i = 0; i<row.length; i++){
        // console.log('row', col, index);
        newRow = slideItem(newRow, i);
    }
    // clean up after merged items
    return cleanup(newRow);
}

const cleanup = (row) => {
    return row.map(item => {
        if (typeof item === 'string') {
            const itemArr = item.split('_');
            return parseInt(itemArr[0]);
        }
        return item;
    });
}

const slideItem = (row, index) => {
    // end of recursion cases
    if (index === 0 || row[index] === null) return row;

    const newRow = [...row];
    switch(newRow[index - 1]) {
        case null:
            newRow[index - 1] = newRow[index];
            newRow[index] = null;
            return slideItem(newRow, index - 1);
        case newRow[index]:
            newRow[index - 1] = `${newRow[index] * BASE}_MERGE`
            newRow[index] = null;
    }
    return newRow;
}

const oneStep = (curr, next) => {
    if (!next || next === null) return 'slide';
    if (next === curr) return 'merge';
    else return 'stop';
}

export {
    oneStep,
    slideRow,
    slideItem,
}