import React from "react";
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

type Props = {
    children?: React.ReactNode;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function ShelterTableRow({children}: Props): JSX.Element {
    return (
        <StyledTableRow>
            {children}
        </StyledTableRow>
    )
}