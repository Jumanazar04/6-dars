import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/pages/Home/Home';
import Shop from './components/pages/Shop/Shop';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Login from './components/pages/Login';
import SingleProduct from './components/pages/SingleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home/>} />
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/products/:id' element={<SingleProduct />}/>
          </Route>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
