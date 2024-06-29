import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AddToCart from './Components/AddToCart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Components/Products';
import Login from './Components/Login';
import Error from './Components/Error';
import Footer from './Components/footer';
import SingleProduct from './Components/SingleProduct';


function App() {
  return (<>

    <BrowserRouter>
      <Navbar />
      <Routes>


        <Route path="/" element={<Home name={"Deepak"} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddToCart" element={<AddToCart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path='*' element={<Error />}/>

         

        
      </Routes>
      <Footer/>
      
    </BrowserRouter>

  </>
  )
}

export default App;
