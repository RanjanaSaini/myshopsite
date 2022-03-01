import React from "react"


function Firstcontainer(){

return(
<div className="container" 
style={{display: "grid",gridTemplateColumns: "auto auto" ,gridTemplateRows:"auto" , backgroundColor:"#F9C5D5", paddingTop:"0px" , paddingBottom:"0px" , paddingLeft:"0px" , paddingRight:"0px"}}>


<div className="childconatiner1 " >
 <h3  style={{textAlign: "center",  fontFamily: 'Source Serif 4',fontSize: "4vw",marginTop: "40px" ,width:"390"}}>Buy Your fashion</h3>
<p >At lowest price</p> 
<p className="subpara">50 lahk + Styles | 650+Catagories </p>
</div>

<div className="childconatiner2 "  >
<img className="img1" src="https://envato-shoebox-0.imgix.net/dfb1/fe52-77b5-414f-b1bf-caacdf76ee25/Hipster+summer+outdoors+copy.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1200&s=e448b7fbbad6626d7f12447654a8eb77" alt="Name" />

</div>



</div>






)
}
export default Firstcontainer




