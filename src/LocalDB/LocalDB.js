const saveBoard = (board) => {
    localStorage.setItem('board', JSON.stringify(board))
};

const getBoard = () => {
    const lsBoard = localStorage.getItem('board')
    return JSON.parse(lsBoard) || null;
}

const resetBoard = () => {
    localStorage.removeItem('board');
}

export {
    saveBoard,
    getBoard,
    resetBoard,
}