import React from "react";
function Navbar(){
    return <div>
    <h1>Your Current Counter</h1>
    <div class="input-group mb-3">
    <span class="input-group-text">$</span>
    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
    <span class="input-group-text">.00</span>
  </div>
  </div>
}
export default Navbar