import { Button } from "@mui/material";
import { createBoard } from "../BoardContainer/boardHelpers";
import { resetBoard } from "../LocalDB/LocalDB";

export const Menu = ({setBoard}) => {
    const onResetClick = () => {
        resetBoard()
        setBoard(createBoard());
    }
    return (
        <Button variant="contained" onClick={ () => onResetClick()}>Restart</Button>
    );
}