import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  title?: string,
  calories: number,
  fat: number,
  carbs: number
) {
  return { name, title, calories, fat, carbs };
}

const rows = [
  createData("Tratamento mais rápido e previsível", "", 159, 6.0, 24),
  createData("Monitoramento online remoto dos casos", "", 237, 9.0, 37),
  createData("Suporte com Doutores", "", 262, 16.0, 24),
  createData("Planejamento virtual elaborado com doutores", "", 305, 3.7, 67),
  createData("Entrega dos alinhadores em 15 dias", "", 356, 16.0, 49),
  createData("Produto BPA Free", "", 356, 16.0, 49),
  createData("Colaboração do paciente", "", 356, 16.0, 49),
  createData("Facilmente removível para refeições", "", 159, 6.0, 24),
  createData(
    "Sem consultas de emergência para bráquetes e fios danificados	",
    "",
    237,
    9.0,
    37
  ),
  createData("Não atrapalha suas selfies", "", 262, 16.0, 24),
  createData("   Aspecto invisível", "", 262, 16.0, 24),
  createData(
    "Removível para escovar os dentes e usar fio dental",
    "",
    262,
    16.0,
    24
  ),
];

export default function Tables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Diferenciais</StyledTableCell>
            <StyledTableCell align="right">New ALigner</StyledTableCell>
            <StyledTableCell align="right">
              Maioria dos alinhadores do mercado
            </StyledTableCell>
            <StyledTableCell align="right">
              Outros tipos de aparelhos no mercado
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
