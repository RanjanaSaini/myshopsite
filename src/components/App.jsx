import  React, { useState }  from "react";
import Header from "./Header"
import Containerblack from "./Containerblack"
import data from "./Womens-ethnic-data"
import Westerndata from "./Womens-western-data"
import Mensdata  from "./Mens-data";
import Electronicsdata from "./Electronics-data"
import Homeandkitchendata from "./Home&kitchen-data"
// import Checkout from "./Checkout"

import {HashRouter as
    BrowserRouter} from "react-router-dom";

import Paths from "./Paths"

function App(){
    
    const {Womensethnicdata} = data
    const {Womenswesterndata} = Westerndata
    const {MensWear} = Mensdata
    const {ElectronicItems} = Electronicsdata
    const { Homeandkitchenitems} = Homeandkitchendata
    // const {checkoutdata} = Checkout
const [cartItem , setcartItem] = useState([]);

const handelchange =(product) =>{

const productexist = cartItem.find((item)=> item.id === product.id);
 if(productexist){
     setcartItem(
         cartItem.map((item)=>
         item.id===product.id ?{...productexist ,  quantity:productexist.quantity + 1 }: item)
     );
    
 }else{
     setcartItem([...cartItem,{...product , quantity: 1}]);
     }
}

const handelremoveproduct = (product)=>{
    const productexist = cartItem.find((item)=> item.id === product.id);
if (productexist.quantity === 1){
    setcartItem(cartItem.filter((item) => item.id  !== product.id));
}else{
setcartItem(cartItem.map((item)=>
item.id === product.id ? {...productexist ,  quantity:productexist.quantity - 1} :item
));

}

}

const handelcartclearnes=()=>{
setcartItem([]);

}

    const removeItem = (product) => {
    const newItems = cartItem.filter((item) => item.id !== product.id)
        setcartItem(newItems);
      };



return(
<>
<BrowserRouter > 
{/* basename={process.env.PUBLIC_URL */}
<Header/>

<Containerblack cartItem={cartItem} />
<Paths Womensethnicdata={Womensethnicdata} Womenswesterndata={Womenswesterndata} MensWear = {MensWear} ElectronicItems={ElectronicItems} Homeandkitchenitems={Homeandkitchenitems} cartItem={cartItem} handelchange={handelchange}  handelremoveproduct={handelremoveproduct} handelcartclearnes = {handelcartclearnes} removeItem={removeItem} />
 </BrowserRouter>

</>
)}
export default App;








// import React from "react";
//  import Womensethniccarts from "./Womens-ethnic-carts"
//  import Womenswesterncarts from "./Womens-western-carts"; 
//  import Menscarts from "./Mens-carts"; 
// import Homekitchencarts from "./Home&kitchen-carts";
// import Electronicscart from "./Electronics-cart";
// import Shoppingcart from "./Shopping-cart";

// // import { Routes ,Route } from 'react-router-dom';
// function App(){

// return(
// <>
// <Routes>
// <Route path='/' element= {<Home/>}/>
// <Route path='/Womensethnic' element= {<Womensethniccarts/>} />
// <Route path='/Womenswestern' element= {<Womenswesterncarts/>}/>

// <Route path="/Mens" element= {<Menscarts/>}/>
// <Route path="/Homes&Kitchen" element= {<Homekitchencarts />}/>
// <Route path="/Electronics" element= {<Electronicscart/>}/>
// <Route path="/Cart" element= {<Shoppingcart/>}/>



// </Routes> 

// </>
// )}
// export default App;

// mongodb+srv://Ranjana:<password>@cluster0.21jac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority