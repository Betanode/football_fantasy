import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'team', label: 'Team', minWidth: 100 },
  { id: 'position', label: 'Position', minWidth: 100 },
  { id: 'salary', label: 'Salary', minWidth: 170 },
  { id: 'points', label: 'Points', minWidth: 170 },
];

function createData(name, team, position, salary, points) {
  return { name, team, position, salary, points };
}

const rows = [
  createData('Tom Brady', 'TB', 'QB', '$1000', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
  createData('Abhinav', 'RM', 'QB', '$1383', '23'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedRowIndex, setSelectedRowIndex] = React.useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
  };

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  return (
    <Paper sx={{ width: '54rem', backgroundColor: '#2F2F2F', borderRadius: '4px' }}>
      <TableContainer
        sx={{
          maxHeight: '100%',
          borderRadius: '4px',
          maxHeight: 440,
          '& .MuiTable-root': {
            borderCollapse: 'collapse',
          },
          '& .MuiTableCell-root': {
            borderBottom: 'none',
          },
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    backgroundColor: '#1D1D1D',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 16px',
                    gap: '5px',
                    color: '#FFFFFF',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '15px',
                    lineHeight: '15px',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isSelected = selectedRowIndex === index;
                return (
                  <TableRow
                    hover
                    selected={isSelected}
                    onClick={() => handleRowClick(index)}
                    style={{
                      backgroundColor: isSelected ? '#807B0F' : 'inherit',
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8px 16px',
                            gap: '5px',
                            color: '#FFFFFF',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '15px',
                            lineHeight: '15px',
                          }}
                        >
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 16px',
          gap: '10px',
          background: '#262626',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              color: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '15px',
              padding: '8px',
            }}
          >
            Page:
          </span>
          <Select
            value={page}
            onChange={handlePageChange}
            disableUnderline
            style={{
              color: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '15px',
              background: '#1D1D1D',
              borderRadius: '4px',
              padding: '10px',
              height: '40px',
              width: '80px',
            }}
          >
            {Array.from(Array(Math.ceil(rows.length / rowsPerPage)), (_, index) => (
              <MenuItem key={index} value={index}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              color: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '15px',
            }}
          >
            Rows Per Page:
          </span>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            SelectProps={{
              style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '8px',
                gap: '8px',
                background: '#1D1D1D',
                borderRadius: '4px',
              },
            }}
            labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count}`}
            labelRowsPerPage=""
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '15px',
              color: '#FFFFFF',
            }}
          />
        </div>
      </div>
    </Paper>
  );
}
