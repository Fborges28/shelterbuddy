import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';


type Props = {
  tableHeadContent: JSX.Element;
  tableBodyContent: JSX.Element;
}

const StyledTable = styled(Table)(({ theme }) => ({
  borderCollapse: "separate",
  borderSpacing: "0px 12px"
}));

export default function ShelterTable({ tableHeadContent, tableBodyContent }: Props): JSX.Element {
  return (
    <TableContainer>
      <StyledTable sx={{ minWidth: 450 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeadContent}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBodyContent}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}