import "./EditStudent.css";
import { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentContact, setStudentContact] = useState("");

  useEffect(() => {
    const studentData = JSON.parse(localStorage.getItem("editStudent"));

    if (studentData) {
      setStudentName(studentData.student_name || "");
      setStudentAge(studentData.student_age || "");
      setStudentAddress(studentData.student_address || "");
      setStudentContact(studentData.student_contact || "");
    }
  }, []);

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

    return true;
  }

  async function updateStudent() {
    //if (!validate()) return;

    try {
      await axios.put(
        `https://student-api.acpt.lk/api/student/update/${id}`,
        {
          student_name: studentName,
          student_age: studentAge,
          student_address: studentAddress,
          student_contact: studentContact,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await Swal.fire({
        icon: "success",
        title: "Updated",
        text: "Student updated successfully.",
        confirmButtonColor: "#7b2cbf",
      });

      navigate("/students");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Could not update student.",
        confirmButtonColor: "#7b2cbf",
      });
    }
  }

  return (
    <div className="edit_student_page">
      <AppBar
        position="sticky"
        sx={{ background: "linear-gradient(90deg, #7b2cbf, #9d4edd)" }}
      >
        <Toolbar className="edit_toolbar">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Edit Student
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
        <Card className="edit_student_card">
          <CardContent>
            <Typography className="edit_title" variant="h4">
              Update Student
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
              onChange={(e) => setStudentAge(e.target.value)}
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
              onChange={(e) => setStudentContact(e.target.value)}
            />

            <Box className="form_btns">
              <Button variant="contained" color="secondary" onClick={updateStudent}>
                Update Student
              </Button>

              <Button variant="outlined" color="secondary" onClick={() => navigate("/students")}>
                Cancel
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}