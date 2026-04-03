import { Grid, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import './BoardUI.css';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const colors = {
    0: '#ffffff',
    2: '#FEFBF3',
    4: '#F8F0DF',
    8: '#FDFFBC',
    16: '#FFEEBB',
    32: '#FFDCB8',
    64: '#FFC1B6',
    128: '#FFABE1',
    256: '#FFE6E6',
    512: '#99FEFF',
    1024: '#94DAFF',
    2048: '#94B3FD',
    4096: '#B983FF',
    8192: '#6E3CBC',
}

const BoardUI = ({board}) => {
    if (!board || !board.length) return <div>nothing</div>;

    return(
        <div className="BoardUI">
            {/* <table>
                {board.map((row, rindex) => {
                    return (<tr>
                        {row.map((cell, cIndex) => {
                            if (cell === 0 ) return <td/>
                            return <td>{cell}</td>
                        })}
                    </tr>)
                })}
            </table> */}
            {board.map((row, rindex) => (
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    columns={{ xs: 12, sm: 12, md: 12 }}
                    key={`${rindex}`}
                >
                    {row.map((cell, cIndex) => (
                        <Grid item xs={3} key={`${rindex}-${cIndex}`}>
                            <Item 
                                className={`cell cell-${cell}`}
                                style={{backgroundColor: `${colors[cell]}`}}
                            >
                                {cell===0?'.':cell}
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </div>
    );
}

export default BoardUI;