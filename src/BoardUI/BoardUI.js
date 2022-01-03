const BoardUI = ({board}) => {
    if (!board || !board.length) return <div>nothing</div>;

    return(
        <div>
            <table>
                {board.map((row, rindex) => {
                    return (<tr>
                        {row.map((cell, cIndex) => {
                            return <td>{cell}</td>
                        })}
                    </tr>)
                })}
            </table>
        </div>
    );
}

export default BoardUI;