import React from "react";
import Table from '@mui/joy/Table';




export default function BasicTable({ content })  {

    

    return (
      <Table className="table" aria-label="basic table" sx={{ '& tr > *:is(:last-child)': { textAlign: 'right' } }}>
        {content}
      </Table>
    )
}