import { useState } from 'react'
import * as React from "react";
import { createRoot } from "react-dom/client";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from '../components/Home';
import Problems from '../components/Problems';

import { BrowserRouter, Route, Routes} from "react-router-dom";
// import * from "react-router-dom";

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>Hello</div>
      <h1>Helloo</h1>
      <BrowserRouter>
      {/* <Navbar/>
      <Routes>
      </Routes> */}
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/problems' element={<Problems/>}>
        </Route>

        <Route path='*' element={<div>404 / Page Not Found / Not Found</div>}>
        </Route>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
