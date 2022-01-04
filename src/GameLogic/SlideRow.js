import { BASE } from "../constants";

const slideRow = (row) => {
    let newRow = [...row];
    for(let i = 0; i<row.length; i++){
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
    if (index === 0 || row[index] === 0) return row;

    const newRow = [...row];
    switch(newRow[index - 1]) {
        case 0:
            newRow[index - 1] = newRow[index];
            newRow[index] = 0;
            return slideItem(newRow, index - 1);
        case newRow[index]:
            newRow[index - 1] = `${newRow[index] * BASE}_MERGE`
            newRow[index] = 0;
    }
    return newRow;
}

export {
    slideRow,
    slideItem,
}