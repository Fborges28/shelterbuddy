import React from "react";
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

type Props = {
    children?: React.ReactNode;
    className?: string;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: "var(--light-gray-color)",
    border: "none",
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function ShelterTableRow({children, className = ""}: Props): JSX.Element {
    return (
        <StyledTableRow className={className}>
            {children}
        </StyledTableRow>
    )
}