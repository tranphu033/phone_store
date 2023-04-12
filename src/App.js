import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Product from './components/Product';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Product />}/>
        <Route path='/cart' Component={Cart}/>
        
      </Routes>
    
  );
}

export default App;
