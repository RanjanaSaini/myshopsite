import React from "react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';

function Fifthcontainer(){

return(
<div className="container" style={{paddingLeft:"0px",paddingRight:"0px", paddingTop:"0px",position:"relative", height:"350px"}}>
<img src="https://www.sellerlift.com/wp-content/uploads/2017/07/7_Steps_To_Creating_An_Engaging_Email_Template.png" alt="Name"
style={{ width:"869px" , height:"350px",opacity: "0.8"}}/> 
<h1 className="fifth-container-text"> Reigster As A My Shop Supplier</h1>
<p className="fifth-container-text2"> Sell your products to crore of customer at 0% commission</p>
<ul className="fifth-container-item-list">
<li> <CheckCircleIcon />Grow your business</li>
<li> <CheckCircleIcon /> Enjoy profite</li>
<li> <CheckCircleIcon /> Sell all over India</li>
<Button variant="contained" style={{marginTop:"20px", backgroundColor:" #E60965" ,color:"F2789F" ,border: "1px solid black"}}>Register Now</Button>

</ul>

</div>
)
}
export default Fifthcontainer