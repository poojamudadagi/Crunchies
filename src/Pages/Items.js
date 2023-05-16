import React from 'react'
import './style.css'
const Items = () => {
  return (
    <div style={{display:'grid' ,justify:'space-between',backgroundColor:'gray' ,height:'580px',width:'1280px'}}>
        <div>
        <h1  className='head1'>ITEMS</h1>
        </div>
        <div className='main' >
        <div className='list1'>                                     
            <h2  className='head2'>Breakfast-Items</h2>
      <ul>
        <li>Idli</li>
        <li>Masala-Dosa</li>
        <li>Tomatobath</li>
        <li>Puri</li>
        <li>Uppit</li>
        <li>Wada</li>
        </ul>
      </div>

      <div className='list2'>                                     
            <h2  className='head3'>Chicken-Items</h2>
      <ul>
        <li>Chilli chicken</li>
        <li>Chicken masala</li>
        <li>Chicken65</li>
        <li>Chicken Manchuri</li>
        <li>Chikcen Biryani </li>
        <li>Chicken Tandoori</li>
        </ul>
      </div>

      <div className='list3'>                                     
            <h2  className='head4'>Veg-Items   </h2>
      <ul>
        <li>Kajukurma</li>
        <li>Kajupannir</li>
        <li>Veg Burger</li>
        <li>Veg Pizza</li>
        </ul>
        </div>
        <div className='list4'>                                     
            <h2  className='head5'>Rice-Items   </h2>
      <ul>
        <li>Plane rice</li>
        <li>Jeera rice</li>
        <li>curd rice</li>
        <li>Basmati rice</li>
        </ul>
        </div>
      </div>
      </div>
     
   
  )
}

export default Items
