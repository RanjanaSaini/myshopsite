import  React, { useState }  from "react";
import Header from "./Header"
import Containerblack from "./Containerblack"
import data from "./Womens-ethnic-data"
import Westerndata from "./Womens-western-data"
import Mensdata  from "./Mens-data";
import Electronicsdata from "./Electronics-data"
import Homeandkitchendata from "./Home&kitchen-data"
// import Checkout from "./Checkout"

import {
    // HashRouter as
    BrowserRouter} 
    from "react-router-dom";

import Paths from "./Paths"

function App(){
    
    const {Womensethnicdata} = data
    const {Womenswesterndata} = Westerndata
    const {MensWear} = Mensdata
    const {ElectronicItems} = Electronicsdata
    const { Homeandkitchenitems} = Homeandkitchendata
const [cartItem , setcartItem] = useState([]);

// function chk(){
//     <Checkout/>
// }

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








