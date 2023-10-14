import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Index from './components/Index';

import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index/>}/>
      <Route path="/Task1" element={<Task1/>} />
      <Route path="/Task2" element={<Task2/>} />
      <Route path="/Task3" element={<Task3/>} />
      <Route path="/Task4" element={<Task4/>} />
      <Route path="/Task5" element={<Task5/>} />
      <Route path="/Task6" element={<Task6/>} />
    </>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

