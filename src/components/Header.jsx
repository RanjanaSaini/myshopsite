import  React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
function Header( ){
    return (
<nav style={{height:"70px"}}class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
 <a  href="/" style={{color:"black"}}>   <h1> <ShoppingBagIcon />My Shop</h1>  </a>

    
      <form className="d-flex">
        <input style={{height:"40px" , marginTop :"13px" , marginBottom:"10px"}} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button style={{width:"100px" ,height:"40px", marginTop:"14px"}} className="btn btn-dark">Search</button>
      </form>
    </div>

</nav>
   


       )
    
    }


export default Header

