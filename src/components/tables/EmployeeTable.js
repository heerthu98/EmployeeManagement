import {
  Autocomplete,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";

function EmployeeTable(props) {
  const [datas, setDatas] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [filter, setFilter] = useState(null);
  const [filteredDatas, setFilteredDatas] = useState([]);

  useEffect(() => {
    if (props.reload === false) {
      const storeData = JSON.parse(localStorage.getItem("employees") || "[]");
      setDatas(storeData);
      setFilteredDatas(storeData);
      storeData.forEach((data) =>
        setDepartments((prevDepartments) =>
          prevDepartments.includes(data.department)
            ? prevDepartments
            : [...prevDepartments, data.department]
        )
      );
    }
  }, [props.reload]);

  const handleFilter = (event, newValue) => {
    setFilter(newValue);
    filterData(newValue);
  };

  const filterData = (value) => {
    if (value) {
      const filteredData = datas.filter((data) => data.department === value);
      setFilteredDatas(filteredData);
    } else {
      setFilteredDatas(datas);
    }
  };

  return (
    <>
      <Box component="form">
        <Autocomplete
          id="combo-box-demo"
          options={departments}
          sx={{ width: 300, mb: 3, mt: -6 }}
          onChange={handleFilter}
          value={filter}
          renderInput={(params) => (
            <TextField {...params} label="Search Department" />
          )}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Contact No</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filter && filteredDatas.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No data found for the selected department.
                </TableCell>
              </TableRow>
            ) : (
              filteredDatas.map((data, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.firstName} {data.lastName}
                  </TableCell>
                  <TableCell align="right">{data.email}</TableCell>
                  <TableCell align="right">{data.phNo}</TableCell>
                  <TableCell align="right">{data.department}</TableCell>
                  <TableCell align="right">{data.address}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EmployeeTable;
