

import Home from '../components/Home';
import Problems from '../components/Problems';
import SignIn from '../components/SignIn';
import Navbar from '../components/Navbar';

import { BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/problems' element={<Problems/>}>
        </Route>
        <Route path='/signin' element={<SignIn/>}>
        </Route>

        <Route path='*' element={<div>404 / Page Not Found / Not Found</div>}>
        </Route>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
