import './App.css'
import Nav from './components/Nav';
import Cards from './components/Cards';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>

      <Route path='/cart-redux-toolkit' element={<Cards/>}  />
      <Route path='/' element={<Cards/>}  />
      <Route path='/cart' element={<Cart/>} />

    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App;
