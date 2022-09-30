import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell';
import { styled, createTheme } from '@mui/material/styles'
import { TableContainer } from '@mui/material';


export const customTheme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#ebf2fe'
      },
      third:{
        main: '#ebf2fe'
      },
      fourth:{
        main: '#7FD8BE'
      },
      white:{
        main: '#ffffff'
      }
    }

  });


export const Container = styled(TableContainer)`
    margin-top: 5px;
    margin-left: 100px;
    width:1000px;
    border-radius: 10px;
    border-color: '#8c9eff';
` 
export const HeaderRow = styled(TableRow)`
border-bottom: solid white 3px;
${({ theme }) => `
    background-color: ${theme.palette.fourth.main};
`}
`

export const HeaderCell = styled(TableCell)`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

    font-family: 'Montserrat', sans-serif;
    font-size: 18px;    
    font-weight: bold;
    text-align: center;
    color: #586A6A;
    ${({ theme }) => `
    background-color: ${theme.palette.fourth.main};
`}
`

export const BodyCell = styled(TableCell)`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-align: center;
  background-color: transparent
`

export const StyledRow = styled(TableRow)`
  border-top: solid #ebf2fe 2px;
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main}
    `}
`;

export const ReportCell = styled(TableCell)`
    padding-bottom: 0px;
    padding-top: 0px;
    ${({ theme }) => `
    background-color: ${theme.palette.third.main};
    `}
`
