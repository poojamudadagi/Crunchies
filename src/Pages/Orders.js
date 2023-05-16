import React from 'react'
import './style.css'
const Orders = () => {
  return (
    <div style={{backgroundColor:'gray' ,height:'580px',width:'1270px',}}>
   <table class="table">
  <thead style={{size:'50px'}}>
    <tr>
      <th scope="col">Sl.No</th>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Address</th>
      <th scope="col">Orders</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>pooja</td>
      <td>998756***</td>
      <td>Karnataka</td>
      <td>Pizza(Rs 200/-)</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>suma</td>
      <td>727272****</td>
      <td>Kerala</td>
      <td>chilli chicken(Rs 150/-)</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Baby</td>
      <td>727267****</td>
      <td>AndraPradesh</td>
      <td>chocolate Ice-cream(Rs 100/-)</td>
    </tr>
    
   
  </tbody>
</table>
    </div>
  )
}

export default Orders;
