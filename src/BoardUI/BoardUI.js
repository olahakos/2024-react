import './BoardUI.css';
const BoardUI = ({board}) => {
    if (!board || !board.length) return <div>nothing</div>;

    return(
        <div className="BoardUI">
            <table>
                {board.map((row, rindex) => {
                    return (<tr>
                        {row.map((cell, cIndex) => {
                            if (cell === 0 ) return <td/>
                            return <td>{cell}</td>
                        })}
                    </tr>)
                })}
            </table>
        </div>
    );
}

export default BoardUI;