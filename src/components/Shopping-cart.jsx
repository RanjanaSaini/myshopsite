

import  React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Scrollbars } from 'react-custom-scrollbars-2';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

function Shoppingcart({cartItem , handelremoveproduct , handelchange , handelcartclearnes , removeItem}){
const totalPrice = cartItem.reduce ((price,item)=> price +item.quantity * item.price ,0 );


return(

<>

<header className="continueShoping">
<div className="continue-shopping">
  <a href="/Womensethnic"> <div className="arrow-icon" ><ArrowBackIcon/> </div> </a>
<h3>Continue Shopping</h3>
</div>
</header>
<hr style={{width:"100%" , textAlign:"center", top:"5px" ,marginTop:"0px"}}></hr>

<section className="main-cart-section ">

<div className="container-cart">
<h1 > Shopping Cart</h1>

<p className="total-items"> You have <spam className="total-items-count">{cartItem.length === 0 ? " 0" : cartItem.length} </spam> in your cart</p>
<div>

<div className="cart-items">
<div  className="cart-items-container">

<Scrollbars >
<hr/>


{cartItem.length === 0 &&( <div style={{fontSize:"50px", textAlign:"center" , marginTop:"350px" , color:"#ACB992" }}>You have No Item In your Cart</div>)}
<div>
{cartItem.map((item)=>(
  
<div key={item.id} >


<div className="items-info">

<div className="product-img">

<img src={item.img} alt={item.Name}/>
</div>


<div className="title">
<h2>{item.Name}</h2>

</div>

<div className="add-minus-quantity">

<button onClick= {()=> handelchange(item)}><AddIcon /></button>
<input type="text"  placeholder={item.quantity}></input>
<button onClick= {()=> handelremoveproduct(item)}><RemoveIcon /> </button>

</div>


<div className="price">
    <h1>{item.price}</h1>
</div>

<div  className="remove-item">
<button onClick={()=>removeItem(item)}><DeleteIcon/></button>
 </div>
 </div>
 <hr/>

 </div> 


))}



  </div>


</Scrollbars>
<hr/>


</div>

 <div className="card-total" >
 <div class="card-clear">{cartItem.length >=1 &&(
   <button onClick={handelcartclearnes}> clear cart </button>
 )}</div>

<h3 > Grand total: <spam> Rs {totalPrice}</spam></h3>

<a href="/#/Checkout"><button > check out</button></a>
</div> 
</div>
</div>
 </div>
</section>

</>

)
    
}

export default Shoppingcart;

















