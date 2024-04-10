import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Cart from './components/home/Cart';
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <>
     <ToastContainer />
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
