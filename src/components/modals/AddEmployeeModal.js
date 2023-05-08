import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

function AddEmployeeModal(props) {
  const [employees, setEmployees] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const newArray = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phNo: data.get("phNo"),
      department: data.get("department"),
      address: data.get("address"),
    };

    const existingData = JSON.parse(localStorage.getItem("employees") || "[]");
    localStorage.setItem(
      "employees",
      JSON.stringify([...existingData, newArray])
    );
    setEmployees([...employees, newArray]); // update the table data state variable
    // form.reset(); // reset the form fields
    props.closeModal();
  }

  return (
    <Modal
      open={props.openModal}
      onClose={() => props.closeModal()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" mb={2}>
          Add Employee
        </Typography>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={6}>
            <TextField
              id="firstName"
              name="firstName"
              className="inputText-firstname"
              label="First Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="lastName"
              className="inputText-lastname"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={6}>
            <TextField
              name="email"
              className="inputText-lastname"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="phNo"
              className="inputText-lastname"
              label="Contact No"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <TextField
          sx={{ mb: 2 }}
          name="department"
          className="inputText-lastname"
          label="Department"
          variant="outlined"
          fullWidth
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          name="address"
          className="inputText-lastname"
          label="Address"
          variant="outlined"
        />
        <Stack direction="row" justifyContent="end" spacing={2}>
          <Button variant="outlined" onClick={() => props.closeModal()}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default AddEmployeeModal;
