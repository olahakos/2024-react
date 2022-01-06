import { createBoard } from "../BoardContainer/boardHelpers";
import { resetBoard } from "../LocalDB/LocalDB";

export const Menu = ({setBoard}) => {
    const onResetClick = () => {
        resetBoard()
        setBoard(createBoard());
    }
    return (
        <button onClick={ () => onResetClick()}>Restart</button>
    );
}