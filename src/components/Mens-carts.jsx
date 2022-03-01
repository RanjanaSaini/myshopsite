import React from "react";
import Footer from "./Footer"



function Menscarts({MensWear, handelchange }){
return(
<>
<section id="design">
  <div class="container-fluid ">

  <div id="design-row" class="row" >


{MensWear.map((Item)=>(
  <div className="design col-lg-4" style={{ marginTop: "25px", marginBottom:"25px" }}  >

    <div class="box">
      <div class="Avtar">
      <img className="img-style" src={Item.img} alt={"Name"}/> 
      </div>
      <div class="box-content">
        <h6 >{Item.Name}</h6>
      
        <p >{Item.price}</p>
        <button type="button" class="btn btn-outline-dark" onClick={() => handelchange (Item)} > Add to Cart</button>


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
export default Menscarts;