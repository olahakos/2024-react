const getEmptyMatrix = (dim) => {
    /**
     * Creates an empty board
     */
    let arr = [];
    for (let i = 0; i < dim; i++) {
        arr[i] = [];
        for (let j = 0; j < dim; j++) {
            arr[i][j] = 0;
        }
    }

    return arr;
}

const getEmptyIndexes = (mtx) => {
    /**
     * Return with an array of the indexes, where 
     * the board value is null
     */
    return getMatrixIndexesByCondition(mtx, i => i === 0 );
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

const mirrorMatrixByY = (mtx) => {
    return mtx.map(row => {
        const newRow = [...row];
        return newRow.reverse();
    });
}

const flipMatrix = (mtx) => {
    const flippedMtx = getEmptyMatrix(mtx.length);
    for(let i = 0; i<mtx.length; i++) {
        for (let j = 0; j<mtx[i].length; j++) {
            flippedMtx[j][i] = mtx[i][j];
        }
    }
    return flippedMtx
}

const areThemSameMatrixes = (mtx1, mtx2) => {
    if (mtx1.length !== mtx2.length) return false;

    for(let i = 0; i<mtx1.length; i++) {
        for (let j = 0; j<mtx1[i].length; j++) {
            if (mtx1[i][j] !== mtx2[i][j]) return false;
        }
    };
    return true;
}

export {
    areThemSameMatrixes,
    getEmptyIndexes,
    getMatrixIndexesByCondition,
    getEmptyMatrix,
    flipMatrix,
    mirrorMatrixByY,
}