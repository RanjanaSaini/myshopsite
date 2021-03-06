

import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login=({handleChange})=>{
    const paperStyle={padding :20,width:300, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <TextField style={{marginTop:"5px"  }}  label='Username' placeholder='Enter username' fullWidth required autocomplete="off"/>
                <TextField style={{marginTop:"15px" }} label='Password' placeholder='Enter password' stype='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Log in</Button>
                <Typography  style={{marginTop:"15px"}}>
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography style={{marginTop:"5px"}}> Do you have an account ?
                     <Link href="#" onClick={()=>handleChange("event",1)}>
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )

}

export default Login
