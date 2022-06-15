import { Animal } from '@/domain/models/Animal.model';
import ShelterTableCell from '@/shared/components/ShelterTable/TableCell';
import { Box } from '@mui/material';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';

import { Order } from '@/domain/models/Order.model';

interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Animal) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Animal;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'type',
      numeric: false,
      disablePadding: false,
      label: 'Type',
    },
    {
      id: 'breed',
      numeric: false,
      disablePadding: false,
      label: 'Breed',
    },
    {
        id: 'gender',
        numeric: false,
        disablePadding: false,
        label: 'Gender',
    },
    {
      id: 'color',
      numeric: false,
      disablePadding: false,
      label: 'Color',
    }
];
  

export default function ShelterAnimalTableHead(props: EnhancedTableProps){

    const { order, orderBy, rowCount, onRequestSort } =
    props;
    const createSortHandler =
        (property: keyof Animal) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
        };

    return (
        <>
            <ShelterTableCell align="left"></ShelterTableCell>
            {
                headCells.map((headCell, index) => (
                    <ShelterTableCell align="left" key={"table-head" + index}>
                        <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : 'asc'}
                        onClick={createSortHandler(headCell.id)}
                        >
                        {headCell.label}
                        {orderBy === headCell.id ? (
                            <Box component="span" sx={visuallyHidden}>
                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                            </Box>
                        ) : null}
                        </TableSortLabel>
                        
                    </ShelterTableCell>
                ))
            }
            <ShelterTableCell align="right"></ShelterTableCell>
        </>
    )
}