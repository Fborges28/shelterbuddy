import React from "react";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

type Props = {
    align?: "inherit" | "left" | "center" | "right" | "justify" | undefined;
    colSpan?: number;
    children?: React.ReactNode;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: "0px",
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function ShelterTableCell({children, align = "left", colSpan = 1}: Props): JSX.Element {
    return (
        <StyledTableCell colSpan={colSpan} align={align}>
            {children}
        </StyledTableCell>
    )
}