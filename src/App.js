import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Login from './components/Login';
import {Routes,Route} from "react-router-dom"
import Store from './components/Store';
import Product from './components/Product';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Productscomponent from './components/Productscomponent';
import Checkout from './components/Checkout';
import Footer from './components/Footer'



function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/store' element={<Store/>} />
        <Route  path='/products/:id' element={<Product/>}/>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/products' element={<Products/>}/>
        <Route  path='/cart' element={<Cart/>}/>
        <Route  path='/checkout' element={<Checkout/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/Productscomponent' element={<Productscomponent/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
