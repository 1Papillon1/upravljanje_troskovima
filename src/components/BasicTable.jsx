import React from "react";
import Table from '@mui/joy/Table';
import { useState, useEffect } from "react";
import { observer } from "mobx-react";




export default function BasicTable({ content })  {

    

    return (
      <Table className="table" aria-label="basic table" sx={{ '& tr > *:is(:last-child)': { textAlign: 'right' } }}>
        {content}
      </Table>
    )
}