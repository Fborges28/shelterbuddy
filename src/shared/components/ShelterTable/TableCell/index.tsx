import React from "react";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

type Props = {
    align?: "inherit" | "left" | "center" | "right" | "justify" | undefined;
    children?: React.ReactNode;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function ShelterTableCell({children}: Props): JSX.Element {
    return (
        <StyledTableCell>
            {children}
        </StyledTableCell>
    )
}