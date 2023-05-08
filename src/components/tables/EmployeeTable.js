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
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    if (props.reload === false) {
      const storeData = JSON.parse(localStorage.getItem("employees") || "[]");
      setDatas(storeData);
      storeData.map((data) =>
        setDepartments([...departments, data.department])
      );
    }
  }, [props.reload]);
  // console.log(departments);
  // function handleFilter(event, newValue) {
  //   setFilter(newValue);
  //   console.log(newValue);
  // }
  return (
    <>
      <Box component="form">
        <Autocomplete
          // disablePortal
          id="combo-box-demo"
          options={departments}
          sx={{ width: 300, mb: 3, mt: -6 }}
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          renderInput={(params) => (
            <TextField {...params} label="Search Department" />
          )}
        />
        {/* <div>Selected value: {filter}</div> */}
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
            {datas?.map((data, index) => (
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EmployeeTable;
