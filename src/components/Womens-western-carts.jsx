import React from "react";
import Footer from "./Footer"


function Womenswesterncarts({Womenswesterndata ,handelchange}){
return(
<>
<section id="design">
  <div class="container-fluid ">

  <div id="design-row" class="row" >


{Womenswesterndata.map((Westernitem)=>(
  <div class="design col-lg-4" style={{ marginTop: "25px", marginBottom:"25px" }} >
    <div class="box">
      <div class="Avtar">
      <img className="img-style" src={Westernitem.img} alt={"Name"}/> 
      </div>
      <div class="box-content">
        <h6 >{Westernitem.Name}</h6>
        <p >{Westernitem.price}</p>
<button  type="button" class="btn btn-outline-dark" onClick={() => handelchange (Westernitem)} > Add to Cart</button>

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
export default Womenswesterncarts;