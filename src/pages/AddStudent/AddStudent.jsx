import "./AddStudent.css";
import { useState } from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddStudent() {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentContact, setStudentContact] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function validate() {
    if (studentName.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Student name is required",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

    if (studentAge.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Student age is required",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

    if (!/^\d+$/.test(studentAge)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid age",
        text: "Student age must contain numbers only.",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

    if (studentAddress.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Student address is required",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

    if (studentContact.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Student contact is required",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

    if (!/^\d{10}$/.test(studentContact)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid mobile number",
        text: "Mobile number must contain exactly 10 digits.",
        confirmButtonColor: "#7b2cbf",
      });
      return false;
    }

    return true;
  }

  async function saveStudent() {
    if (!validate()) return;

    try {
      const formData = new FormData();
      formData.append("student_name", studentName);
      formData.append("student_age", studentAge);
      formData.append("student_address", studentAddress);
      formData.append("student_contact", studentContact);

      await axios.post("https://student-api.acpt.lk/api/student/save", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Student added successfully.",
        confirmButtonColor: "#7b2cbf",
      });

      navigate("/students");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Could not add student.",
        confirmButtonColor: "#7b2cbf",
      });
    }
  }

  return (
    <div className="add_student_page">
      <AppBar
        position="sticky"
        sx={{ background: "linear-gradient(90deg, #7b2cbf, #9d4edd)" }}
      >
        <Toolbar className="add_toolbar">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Add Student
          </Typography>

          <Button
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff" }}
            onClick={() => navigate("/students")}
          >
            Back
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 5 }}>
        <Card className="add_student_card">
          <CardContent>
            <Typography className="add_title" variant="h4">
              Add New Student
            </Typography>

            <TextField
              label="Student Name"
              fullWidth
              sx={{ mb: 3 }}
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />

            <TextField
              label="Student Age"
              fullWidth
              sx={{ mb: 3 }}
              value={studentAge}
              onChange={(e) => setStudentAge(e.target.value.replace(/\D/g, ""))}
            />

            <TextField
              label="Student Address"
              fullWidth
              sx={{ mb: 3 }}
              value={studentAddress}
              onChange={(e) => setStudentAddress(e.target.value)}
            />

            <TextField
              label="Student Contact"
              fullWidth
              sx={{ mb: 3 }}
              value={studentContact}
              onChange={(e) => setStudentContact(e.target.value.replace(/\D/g, ""))}
            />

            <Box className="form_btns">
              <Button variant="contained" color="secondary" onClick={saveStudent}>
                Save Student
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigate("/students")}
              >
                Cancel
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}