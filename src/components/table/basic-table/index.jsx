import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


export default function BasicTable({ rows, columns, heading }) {

   return (
      <>
         <Typography variant='h6'>{heading}</Typography>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="table">
               <TableHead >
                  <TableRow >
                     {columns?.map((head, ind) => (
                        <TableCell key={ind} align="left">{head.name}</TableCell>
                     ))}
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows?.map((row) => (
                     <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                           {row.lastName}
                        </TableCell>
                        <TableCell component="th" scope="row">
                           {row.contact}
                        </TableCell>
                        <TableCell component="th" scope="row">
                           {row.email}
                        </TableCell>

                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </>
   );
}
