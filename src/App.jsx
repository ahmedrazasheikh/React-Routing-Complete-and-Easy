import './App.css';
import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Home from "./Components/home";
import Menu from './Components/Menu';
import Contact from "./Components/Contact";
import About from "./Components/About";
function App () {
let [isLogin,setIsLogin ] = useState(false)

  return(
    <div>
{isLogin ? 
  <ul   className='flex-row'>
            <li> <Link  className='text-decoration-none' to={`/`}>Home</Link> </li>
            <li> <Link className='text-decoration-none'  to={`contact`}>Contact</Link> </li>
            <li> <Link className='text-decoration-none'  to={`/about`}>About</Link> </li>
            <li> <Link className='text-decoration-none'  to={`/menu`}>Menu</Link> </li>
          </ul>
 :
 <ul>
 <li> <Link className='text-decoration-none'  to={`/`}>Login</Link> </li>
 <li> <Link className='text-decoration-none'  to={`/signup`}>Signup</Link> </li>
</ul>
  }

<button  onClick={(e)=>{
console.log(e);
setIsLogin(!isLogin)

}} >Click Here</button>
{isLogin ?

<Routes>
<Route path="/" element={<Home />} />
<Route path="about" element={<About />} />
<Route path="Contact" element={< Contact />} />
<Route path="Menu" element={<Menu />} />
<Route path="*" element={<Navigate to="/" replace={true} />} />
</Routes>
 :
<Routes>
          <Route path="/" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>


  }




    </div>
  )
}
export default App; 