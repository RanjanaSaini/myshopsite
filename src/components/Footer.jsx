import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer(){

return (
    <>



{/* <section className="Footer" id="contact-us">
  <footer className="footer">
    <div className="container">
      <div   className="row" >
        <div  className="footer-col">
          <h5>company</h5>
          <ul>
            <li> <a href="#">About</a>  </li>
            <li> <a href="#">Career</a>  </li>
            <li> <a href="#">Press release</a>  </li>
            <li> <a href="#">Gift a smile</a>  </li>

          </ul>

        </div>
        <div className="footer-col">
          <h5>Make Money With Us</h5>
          <ul>
            <li> <a href="#">Sell on Riwaaz</a>  </li>
            <li> <a href="#">Become Affiliate</a>  </li>
            <li> <a href="#">Advertise Your Product</a>  </li>
            <li> <a href="#">Pay On Merchant</a>  </li>
           </ul>

        </div>
        <div className="footer-col">
          <h5>Connect With Us</h5>
          <ul>
            <li> <a href="#">Facebook</a>  </li>
            <li> <a href="#">Intagram</a>  </li>
            <li> <a href="#">Twitter</a>  </li>
          </ul>

        </div>
        <div className="footer-col">
          <h5>Let US Help You</h5>
          <ul>
            <li> <a href="#">Your Account</a>  </li>
            <li> <a href="#">Return Center</a>  </li>
            <li> <a href="#">100% Purchase Protection</a>  </li>
            <li> <a href="#">Help</a>  </li>

          </ul>

        </div>
      </div>

    </div>
</footer>
</section>

<footer className="white-color"id="footer">
  <div className="container-fluid">



<p className="footer-text">© Copyright 2021 Ranjana saini</p>

</div>

</footer> */}

<footer class="page-footer font-small blue pt-4" style={{backgroundColor:"black"}}>

  <div class="container-fluid text-center text-md-left">

    <div class=" row">

      <div class="col-md-6 mt-md-0 mt-3">

        <h5 class="text-uppercase" style={{fontSize:"20px"}}>Shop Nonstop with My Shop</h5>
        <p className="footer-text"> Trusted by more than one crore indians Cash on delivery | Free delivery</p>
      </div>

      <hr class="clearfix w-100 d-md-none pb-3"/>

      <div class="col-md-3 mb-md-0 mb-3">

        <h5  className="list-uppercase1">Connect with Us :</h5>
        <ul class="list-unstyled" >
           <li> 
             <a href="#!">Career</a> 
          </li> 
          
           <li>
            <a href="#!">Become a supplier</a>
          </li>
          <li>
            <a href="#!">Legal & Policies</a>
          </li>
          <li>
            <a href="#!">Blog Post</a>
          </li>
        </ul> 
      </div>

      <div class="col-md-3 mb-md-0 mb-3">

        <h5 class="list-uppercase2">Reach out to Us :</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!"><FacebookIcon/></a>
          </li>
          <li>
            <a href="#!"><InstagramIcon/></a>
          </li>
          <li>
            <a href="#!"><YouTubeIcon/></a>
          </li>
          <li>
            <a href="#!"><LinkedInIcon/></a>
          </li>
        </ul>

      </div>

    </div>

  </div>

  <div style={{paddingTop:"0px"}} class="footer-copyright text-center py-3">© 2022 Copyright: Ranjana Saini
  </div>

</footer>
</>
)
}
export default Footer;





