
import './Register.css';
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import { NavLink, useNavigate } from "react-router-dom";

import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';


export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    function validate(name, email, password, confirmPassword) {

        if (name === "") {
            alert("Name is required");
            return false;
        }

        if (email === "") {
            alert("Email is required");
            return false;
        }

        // ✅ email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }

        if (password === "") {
            alert("Password is required");
            return false;
        }

        // ✅ numbers only & min 6 digits
        const numberOnlyPattern = /^[0-9]{6,}$/;
        if (!numberOnlyPattern.test(password)) {
            alert("Password must contain at least 6 numbers only");
            return false;
        }

        if (confirmPassword === "") {
            alert("Confirm password is required");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return false;
        }

        // all good
        return true;
    }


    async function handleRegister() {
        const isValid = validate(name, email, password, confirmPassword);
        //console.log("click")

        if (!isValid) return;

        try {
            await axios.post("https://student-api.acpt.lk/api/register", {
                name: name,
                email: email,
                password: password
            });

            alert("register successfull");
            navigate("/");
        } catch (error) {
            alert("register Faild")
        }



    }

    return (
        <div>
            <div style={{ display: "flex", width: "100%", height: "100vh" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "40%", height: "100vh", backgroundColor: "#d7bbf2" }}>
                    <Card sx={{ width: 450, margin: 1 }}>
                        <Typography variant="h2" component="h2" sx={{ paddingLeft: 15, color: "#8320dfff" }}>
                            Register
                        </Typography>
                        <CardContent>


                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth onChange={(e) => { setName(e.target.value) }} />
                            <br /><br /><br />
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth onChange={(e) => { setEmail(e.target.value) }} />
                            <br /><br /><br />
                            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth onChange={(e) => { setPassword(e.target.value) }} type="password"
                            />
                            <br /><br /><br />
                            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth onChange={(e) => { setConfirmPassword(e.target.value) }} type="password"
                            />
                            <br /><br /><br />


                            <NavLink to={"/"}>You have a account?</NavLink>
                            <Button variant="contained" color="success" sx={{ marginLeft: 35 }} onClick={handleRegister}>
                                Register
                            </Button>



                        </CardContent>

                    </Card>
                </div>

                <div className='background right_div'>

                </div>

            </div>

        </div>

    );
}