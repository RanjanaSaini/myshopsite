import React from "react"
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

function Fourtcontainer(){

return(
<div className="container" style={{paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px",paddingBottom:"0px" , position:"relative"}}>
    <img src="https://t3.ftcdn.net/jpg/03/38/11/34/360_F_338113434_1OTf8iR1bYPskGDwvGP1pnBPPQ6bJdhB.jpg" alt="Name"
    style={{ width:"863px", height:"420px",opacity: "0.9"}}/>
<p className="fourth-container-text1"> Become a Reseller and  Start your Online Business with 0 investment</p>
<Button variant="contained"  style={{ height:"50px", backgroundColor:"#1A1A40",position:"absolute ",right:"250px", bottom:"100px" , }}>
 <GoogleIcon />+ Google Play
</Button>

<Button variant="contained"  style={{ height:"50px", backgroundColor:"#1A1A40",position:"absolute ",right:"70px", bottom:"100px" , }}>
 <AppleIcon /> Apple store
</Button>

</div>
)
}
export default Fourtcontainer