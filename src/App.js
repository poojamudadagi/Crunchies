import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

import About from './Pages/About';
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Orders from './Pages/Orders';
import Items from './Pages/Items';



function App() {
  return (
    <Router>
    <div className="nav" style={{backgroundColor:'black',height:'500%'}}>
    <h1 style={{color:'white',font:'verdana'}}>Crunchies</h1>
  <Link className="nav-link active"  to="/">Home</Link>
  <Link className="nav-link" to="/About">About-Us</Link>
  <Link className="nav-link" to="/Items">Items</Link>
  <Link className="nav-link" to="/Contact">Contact-Us</Link>
  <Link className="nav-link" to="/Orders">Orders</Link>
</div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Items' element={<Items />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Orders' element={<Orders />} />
   


      
    </Routes>
 
    </Router>
  );
}

export default App;
