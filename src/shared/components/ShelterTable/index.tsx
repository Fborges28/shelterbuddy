import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type ShelterTable = {
  tableHeadContent: JSX.Element;
  tableBodyContent: JSX.Element;
}

export default function ShelterTable({ tableHeadContent, tableBodyContent }: ShelterTable): JSX.Element {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeadContent}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBodyContent}
        </TableBody>
      </Table>
    </TableContainer>
  );
}