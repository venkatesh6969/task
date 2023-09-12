import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import SignIn from "./Components/Signup";
function App(){
  return(
    <>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/login' element = {<Login/>} />
      <Route path='/signin' element = {<SignIn/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App