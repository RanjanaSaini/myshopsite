import React from "react"

function Checkout() {
  return (


<div className= "row">
  <div className="col-75">
    <div className="container" style={{height:"670px"}}>
      <form>


      <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Name"/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="xyz@example.com"/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="Mela street"/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="Alwar"/>

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="Rajasthan"/>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="301001"/>
              </div>


       </div> 
</div>

       <div className="col-50">
       <h3 style={{marginBottom:"30px"}}>Payment Method</h3>


       <div class="form-group row">
    <div class="col-sm-10">
        <div class="form-check form-check-inline" style={{marginRight:"20px"}}>
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">Debit Card</label>
        </div>
        <div class="form-check form-check-inline" style={{marginRight:"20px"}}>
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">Credit Card</label>
        </div>
        <div class="form-check form-check-inline" style={{marginRight:"20px"}}>
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">Visa card</label>
        </div>
        <div class="form-check form-check-inline" style={{marginRight:"20px"}}>
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">Master card</label>
        </div>

        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">Cash on delivery</label>
        </div>

        </div>
        </div>


 <label style={{marginTop:"10px"}} for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="Name"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="Expire month"/>
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="XXX"/>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="XXX"/>
              </div>
              
</div>






       </div>
       </div>
      </form>
      <button type="button" style={{width:"300px" , marginLeft:"500px"}} class="btn btn-outline-dark">Payment</button>
</div>
</div>
</div>


  )
}

export default Checkout