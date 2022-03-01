import React from "react"
import Button from '@mui/material/Button';

function Thirdcontainer(){

return(
<div className="container" style={{paddingLeft:"0px",paddingTop:"0px",paddinBottom:"0px",paddingRight:"0px", position:"relative"}}>
{/* /* ////////////////////////////cover image//////////////////////////// */} 
<p className="third-conatiner-text" > Home Care</p>

<img src="https://media.istockphoto.com/photos/contemporary-interior-design-for-interior-mock-up-in-living-room-picture-id1227524015?k=20&m=1227524015&s=612x612&w=0&h=cAZxe7VY1-izb2z_XOObv93eHmXQIxqz44SyOWach4M=" alt="Name"
style={{ width:"869px" , height:"420px",opacity: ".4"}}/>

 <a href= "/Homes&Kitchen"><Button className="container-third-button" variant="contained" style={{position:"absolute",
top:"170px", left:"80px", backgroundColor:"#064635"}}>View all</Button> </a>

{/* ////////////////////first image///////////////////////////////////////////////// */}
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyZaJEfhBvzzvkTEzkDUKOD47X_4Cp5QyHQ&usqp=CAU" alt="Name"
style={{height:"200px",width:"200px" ,position: "absolute",top: "28px" , right:"450px",border: "5px solid skyblue",}}/>

<Button className="container-third-button" variant="contained" style={{position:"absolute",
bottom:"118px", left:"254px", backgroundColor:"#064635"}}>Beedsheets</Button>

{/* ///////////////////////////////second image////////////////////////////////////// */}
<img src="https://www.yankodesign.com/images/design_news/2021/05/kitchen-appliances-ds/kitchen_appliances_ds_yanko_design-01.jpg" alt="Name"
style={{height:"200px",width:"200px" ,position: "absolute",top: "28px" , right:"237px", border: "5px solid skyblue"}} />

<Button className="container-third-button" variant="contained" style={{position:"absolute",
bottom:"118px", left:"469px", backgroundColor:"#064635"}}>kitchenware</Button>




{/* ///////////////////////////////second image////////////////////////////////////// */}

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLzRAj8BJYzPAAT7VCbmSNgA5iwg7Gr9YNA&usqp=CAU" alt="Name"
    style={{height:"200px",width:"200px" ,position: "absolute",top: "28px" , right:"19px",border: "5px solid skyblue"}} 
/>
<Button className="container-third-button" variant="contained" style={{position:"absolute",
bottom:"118px", right:"72px", backgroundColor:"#064635"}}>Carpets</Button>





</div>

)
}
export default Thirdcontainer