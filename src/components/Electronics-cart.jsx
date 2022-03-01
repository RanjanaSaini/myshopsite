import React from "react";
import Footer from "./Footer"




function Electronicscart({ElectronicItems ,  handelchange}){
return(
<>
<section id="design">
  <div class="container-fluid ">

  <div id="design-row" class="row" >


{ElectronicItems.map ((items)=>(

<div class="design col-lg-4" style={{marginTop:"25px" , marginBottom:"25px" }}>
    <div class="box">
      <div class="Avtar">
      <img className="img-style" src={items.img} alt={items.Name}/> 
      </div>
      <div class="box-content">
        <h6 >{items.Name}</h6>
        <p >{items.price}</p>
        <button type="button" class="btn btn-outline-dark" onClick={() => handelchange (items)} > Add to Cart</button>


        </div>

</div>
</div>
))}


</div>






      </div>


      </section>
<Footer/>
</>

)
}
export default Electronicscart;