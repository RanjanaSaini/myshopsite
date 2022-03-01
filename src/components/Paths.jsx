import React from "react";
import Home from "./Home"
  import Womensethniccarts from "./Womens-ethnic-carts"
 import Womenswesterncarts from "./Womens-western-carts"; 
 import Menscarts from "./Mens-carts"; 
import Homekitchencarts from "./Home&kitchen-carts";
import Electronicscart from "./Electronics-cart";
import Shoppingcart from "./Shopping-cart";
import Profile from "./Profile"
import Checkout from "./Checkout"

import { Routes ,Route } from 'react-router-dom';
 

function Paths({handelchange ,cartItem  , Womensethnicdata , handelremoveproduct,Womenswesterndata ,MensWear ,Homeandkitchenitems, ElectronicItems , handelcartclearnes , removeItem }) {
return(
<Routes >
{/* basename="/test_repository" */}
 <Route path='/myshopsite' element= {<Home/>}/>
  <Route path='/Womensethnic' element= {<Womensethniccarts  Womensethnicdata={Womensethnicdata} handelchange={handelchange}/>} />
 <Route path='/Womenswestern' element= {<Womenswesterncarts Womenswesterndata={Womenswesterndata} handelchange={handelchange}/>}/>
 <Route path="/Mens" element= {<Menscarts MensWear={MensWear} handelchange={handelchange}/>}/>
 <Route path="/Homes&Kitchen" element= {<Homekitchencarts Homeandkitchenitems={Homeandkitchenitems} handelchange={handelchange}   />}/>
 <Route path="/Electronics" element= {<Electronicscart  ElectronicItems= {ElectronicItems} handelchange={handelchange}/>}/>
<Route path="/Cart" element= {<Shoppingcart cartItem= {cartItem} handelchange ={handelchange} handelremoveproduct={handelremoveproduct} handelcartclearnes={handelcartclearnes} removeItem={removeItem}/>}/>
<Route path="/Profile" element= {<Profile/>}/>
<Route path='/Checkout' element= {<Checkout/>}/>


</Routes>
)

}


export default Paths;