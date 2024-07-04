import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";

export interface CarTable {
  id: string;
  manufacture: string;
  plate: string;
  rentPerDay: number;
  capacity: number;
  available: boolean;
  transmission: string;
  type: string;
  year: number;
}

interface TableCarProps {
  cars: CarTable[];
}

const TableCar: React.FC<TableCarProps> = ({ cars }) => {
  const entryData = 10;
  const [page, setPage] = useState(1);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * entryData;
  const paginatedCars = cars.slice(startIndex, startIndex + entryData);

  const dataSource = paginatedCars.map((car, i) => ({
    no: startIndex + i + 1,
    id: car.id,
    manufacture: car.manufacture,
    plate: car.plate,
    price: car.rentPerDay,
    capacity: car.capacity,
    available: car.available ? "True" : "False",
    transmission: car.transmission,
    type: car.type,
    year: car.year,
  }));

  const columnsCars = [
    { label: "No", key: "no" },
    { label: "Plate", key: "plate" },
    { label: "Manufacture", key: "manufacture" },
    { label: "Price", key: "price" },
    { label: "Capacity", key: "capacity" },
    { label: "Transmission", key: "transmission" },
    { label: "Type", key: "type" },
    { label: "Year", key: "year" },
    { label: "Available", key: "available" },
  ];

  return (
    <Stack spacing={4}>
      {/* Header */}
      <Box display="flex" alignItems="center" gap={1}>
        <Box width={2} height={20} bgcolor="primary.main" />
        <Typography variant="h5" fontWeight="bold">
          List Car
        </Typography>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columnsCars.map((column) => (
                <TableCell key={column.key} align="center">
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSource.map((row) => (
              <TableRow key={row.id}>
                {columnsCars.map((column) => (
                  <TableCell key={column.key} align="center">
                    {row[column.key as keyof typeof row]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={Math.ceil(cars.length / entryData)}
          page={page}
          onChange={(_, newPage) => handleChangePage(newPage)}
          color="primary"
        />
      </Box>
    </Stack>
  );
};

export default TableCar;
