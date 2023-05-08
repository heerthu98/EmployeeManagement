import React, { useState } from "react";
import EmployeeTable from "../components/tables/EmployeeTable";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddEmployeeModal from "../components/modals/AddEmployeeModal";

function Dashboard() {
  const [addModal, setAddModal] = useState(false);
  return (
    <div>
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div></div>
        <Button
          onClick={() => setAddModal(true)}
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </div>
      <EmployeeTable reload={addModal} />
      <AddEmployeeModal
        openModal={addModal}
        closeModal={() => setAddModal(false)}
      />
    </div>
  );
}

export default Dashboard;
