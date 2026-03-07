
import './Login.css';
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import { NavLink } from "react-router-dom";

import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';


export default function Login() {
    // const [title,setTitle] = useState("");
    // const [body,setBody] = useState("");

    // const handlePost = async ()=>{
    //     const res = await axios.post("https://jsonplaceholder.typicode.com/posts",{
    //         title,
    //         body,
    //         userId:1,
    //     });

    //     alert(JSON.stringify(res.data,null,2));
    // }

    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const login = async ()=>{
        try{
            await axios.post("https://student-api.acpt.lk/api/login",{
                email:email,
                password:password
            });

            alert("Login sucssufull");
        }catch{
            alert("Login Faild")
        }
    }

    return (
        <div>
            <div className="login_container">
                <div className="left_side">
                    <Card sx={{ width: 450, margin: 1 }}>
                        <Typography variant="h2" component="h2" sx={{paddingLeft:19,color:"#8320dfff"}} >
                                Login
                            </Typography>
                        <CardContent>
                            

                            
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth onChange={(e)=>{setEmail(e.target.value)}}/>
                            <br /><br /><br />
                            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth onChange={(e)=>{setPassword(e.target.value)}} type="password"
/>
                            
                            <br /><br /><br />

                            <NavLink to={"/register"}>You haven't a account?</NavLink>
                            <Button variant="contained" color="success" sx={{marginLeft:35}} onClick={login}>
                                Login
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