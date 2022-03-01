import React from "react";
import Footer from "./Footer"



function Womensethniccarts({Womensethnicdata , handelchange}) {

  return (
    <>
      <section id="design">
        <div class="container-fluid ">

          <div id="design-row" class="row" >
          {Womensethnicdata.map((productitem)=>(


          

          <div class="design col-lg-4" style={{ marginTop: "25px" , marginBottom:"25px"  }}>
        <div class="box">
          <div class="Avtar">
            <img className="img-style" src={productitem.img} alt={"Name"} />
          </div>
          <div class="box-content">
            <h6 >{productitem.Name}</h6>
            <p >{productitem.price}</p> 
            <button  type="button" className="btn btn-outline-dark" onClick={() => handelchange (productitem)} > Add to Cart</button>
          </div>

        </div>
     </div>
      ))}
      </div>
        </div> 


       </section>
      <Footer />

    </>

  )
}
export default Womensethniccarts;




