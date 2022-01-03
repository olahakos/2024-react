const selectRandom = (arr) => {
    if (!arr || arr.length < 1) return null;
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const pickTwoIndexes = (inputArr) => {
    if (!inputArr || inputArr.length < 2) return null;
    
    const arr = [...inputArr];
    const ind1 = selectRandom(arr);
    arr.splice(arr.indexOf(ind1), 1);
    const ind2 = selectRandom(arr);
    return [ind1, ind2];
}

export {
    selectRandom,
    pickTwoIndexes
}