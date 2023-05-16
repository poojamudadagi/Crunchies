import React from 'react'
import './style.css'
const Contact = () => {
  return(
    <div style={{padding:'50px',backgroundColor:'gray' ,height:'580px',width:'1260px'}}>
<div className="mb-2" >
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="Name" className="form-control" id="exampleFormControlInput1" textarea=""/>
</div>
<div className="mb-2">
  <label for="exampleFormControlTextarea1" className="form-label">Contact Number</label>
  <input type="Contact" className="form-control" id="exampleFormControlTextarea1" />
</div>    
<div className="mb-2">
  <label for="exampleFormControlTextarea1" className="form-label">Address</label>
  <input className="form-control" id="exampleFormControlTextarea1" />
</div>    
<div className="mb-2">
  <label for="exampleFormControlTextarea1" className="form-label">Orders</label>
  <input className="form-control" id="exampleFormControlTextarea1" />
</div> 
<div style={{alignContent:'center'}}>
<button type="button" class="btn btn-primary">
  Submit
</button> 
</div>  
</div>
  );
}

export default Contact
