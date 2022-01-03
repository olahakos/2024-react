const getEmptyMatrix = (dim) => {
    /**
     * Creates an empty board
     */
    let arr = [];
    for (let i = 0; i < dim; i++) {
        arr[i] = [];
        for (let j = 0; j < dim; j++) {
            arr[i][j] = null;
        }
    }

    return arr;
}

const getEmptyIndexes = (mtx) => {
    /**
     * Return with an array of the indexes, where 
     * the board value is null
     */
    return getMatrixIndexesByCondition(mtx, i => i === null );
}

const getMatrixIndexesByCondition = (mtx, func) => {
    const trueIndexes = [];
    for (let i = 0; i < mtx.length; i++) {
        for (let j = 0; j < mtx[i].length; j++) {
            if (func(mtx[i][j])) trueIndexes.push({i,j})
        }
    }
    return trueIndexes;
}

export {
    getEmptyIndexes,
    getMatrixIndexesByCondition,
    getEmptyMatrix,
}