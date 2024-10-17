import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Login_Signup from './Pages/Login_Signup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/mens' element={<ShopCategory category='men'/>}/>
        <Route path='/womens' element={<ShopCategory category='women'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='login' element={<Login_Signup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
