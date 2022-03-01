import  React from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";

function Containerblack({cartItem}){

    return (

  <div className="container-fluid-list">
<div className="items">

<ul> 
<li >
  <Link to="/Womensethnic">Women Ethnic</Link></li>


  <li><Link to="/Womenswestern"> Women Western</Link></li>
  <li><Link to="/Mens">Mens</Link></li>
  <li><Link to="/Homes&Kitchen">Home & Kitchen</Link></li>
  <li><Link to="/Electronics">Electronics</Link></li>

 <li className="dropdown" style={{float:"right"}} ><Link to="/Profile" > <PersonAddIcon/>Profile </Link></li>
<li  className="cart-icon" style={{float:"right"}}  ><Link to="/Cart"><ShoppingCartIcon/>Cart</Link>
<p style={{marginTop:"0px"}}>0{cartItem.length === 0 ? " " : cartItem.length}</p></li> 


</ul>

</div>
</div>














    )






}




export default Containerblack;


