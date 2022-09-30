import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ThemeProvider } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles';
import TablePaginationUnstyled, {
  tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';

import {customTheme, Container, HeaderCell, HeaderRow, BodyCell, StyledRow, ReportCell} from '../styles/styleTable'


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background-color: white;

    @media (min-width: 900px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select}{
    padding: 2px;
    border: 1px solid grey;
    border-radius: 50px;
    background-color: white;
    color:black;

    &:hover {
      background-color: white;
    }

    &:focus {
      outline: 1px solid white;
    }
  }

  & .${classes.displayedRows} {
    margin: 0;
    background-color: white;
    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    padding: 2px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 50px;
    text-align: center;
  }

  & .${classes.actions} > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: white;
    color: black;

    &:hover {
      background-color: transparent;
    }

    &:focus {
      outline: 1px solid black;
      background-color: white
    }
  }
  `,
);

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles()
  

  return (
    <React.Fragment>
      <StyledRow className='classes'>
        <BodyCell>
        <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            
            >
            {open ? <KeyboardArrowUpIcon style={{backgroundColor: 'transparent'}}/> : <KeyboardArrowDownIcon style={{backgroundColor: 'transparent'}}/>}
          </IconButton>
         </BodyCell>
        <BodyCell>
          {row.index}
        </BodyCell>
        <BodyCell >{row.KEY}</BodyCell>
        <BodyCell>{row.ACR}</BodyCell>
      </StyledRow>
      <StyledRow>
        <ReportCell colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1}}>
              <Typography variant="h6" gutterBottom component="div">
                Informe
              </Typography>
                {row.informe}
            </Box>
          </Collapse>
        </ReportCell>
      </StyledRow>
    </React.Fragment>
  );
}



export default function TableComponent(props) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
      <>
      <ThemeProvider theme={customTheme}>
        <Paper
        sx={{
          p: 2,
          marginLeft: '255px',
          marginTop: '10px',
          height: '300%',
          maxWidth: 1330,
          flexGrow: 1,
          backgroundColor: '#ffffff'
        }}
        >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing = {2}
          style = {{backgroundColor: 'transparent'}}
        >
          <Grid item style={{backgroundColor: 'transparent'}}>
          <Container component={Paper} >
              <Table aria-label="sticky table" >
                  <TableHead>
                  <HeaderRow >
                      <HeaderCell />
                      <HeaderCell>Priority</HeaderCell>
                      <HeaderCell>Key</HeaderCell>
                      <HeaderCell>ACR</HeaderCell>
                  </HeaderRow>
                  </TableHead>
                  <TableBody>
                  
                  {props.patients
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                      <Row key={row.index} row={row} />
                  ))}
                  </TableBody>
              </Table>
              <CustomTablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={props.patients.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage = 'Filas por Página'

              />
            </Container>
          </Grid>
        </Grid>       
        </Paper>            
        </ThemeProvider>  
      </>

    );
}
