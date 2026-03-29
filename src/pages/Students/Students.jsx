import "./Students.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    Grid,
    Card,
    CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Students() {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }

        getStudents();
    }, []);

    async function getStudents() {
        try {
            const response = await axios.get(
                "https://student-api.acpt.lk/api/student/getAll",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setStudents(response.data);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: "Unable to load students.",
                confirmButtonColor: "#7b2cbf",
            });
        }
    }

    async function handleDelete(id) {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This student will be deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7b2cbf",
            cancelButtonColor: "#999",
            confirmButtonText: "Yes, Delete",
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`https://student-api.acpt.lk/api/student/delete/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                Swal.fire({
                    icon: "success",
                    title: "Deleted",
                    text: "Student deleted successfully.",
                    confirmButtonColor: "#7b2cbf",
                });

                getStudents();
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Delete Failed",
                    text: "Could not delete student.",
                    confirmButtonColor: "#7b2cbf",
                });
            }
        }
    }

    function logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <div className="students_page">
            <AppBar
                position="sticky"
                sx={{ background: "linear-gradient(90deg, #7b2cbf, #9d4edd)" }}
            >
                <Toolbar className="students_toolbar">
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Student Management
                    </Typography>

                    <Box className="top_btns">
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => navigate("/add-student")}
                        >
                            Add Student
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{ color: "#fff", borderColor: "#fff" }}
                            onClick={logout}
                        >
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Container sx={{ py: 5 }}>
                <Typography className="students_title" variant="h4">
                    All Students
                </Typography>

                <Grid container spacing={3} sx={{ mt: 1 }}>
                    {students.length > 0 ? (
                        students.map((student) => (
                            <Grid item xs={12} sm={6} md={4} key={student.id}>
                                <Card className="student_card">
                                    <CardContent>
                                        <Typography className="student_name" variant="h6">
                                            {student.student_name}
                                        </Typography>

                                        <Typography className="student_text">
                                            <strong>Age:</strong> {student.student_age}
                                        </Typography>

                                        <Typography className="student_text">
                                            <strong>Address:</strong> {student.student_address}
                                        </Typography>

                                        <Typography className="student_text">
                                            <strong>Contact:</strong> {student.student_contact}
                                        </Typography>

                                        <Box className="student_card_btns">
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => {
                                                    localStorage.setItem("editStudent", JSON.stringify(student));
                                                    navigate(`/edit-student/${student.id}`);
                                                }}
                                            >
                                                Update
                                            </Button>

                                            <Button
                                                variant="outlined"
                                                color="error"
                                                onClick={() => handleDelete(student.id)}
                                            >
                                                Delete
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Grid item xs={12}>
                            <Card className="empty_card">
                                <CardContent>
                                    <Typography align="center">
                                        No students found.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </div>
    );
}