import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Mail from './components/Mail';
import Index from './components/Index';
import Sidebar from './components/Sidebar';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <Index />
//       },
//       {
//         path: "/mail/:id",
//         element: <Mail />
//       },
//     ]
//   }
// ]);

function App() {
  return (
    <div>
      <Navbar />
      <div className='flex'>
       <Sidebar/>
       <Mail/>
      </div>
      
      {/* <RouterProvider router={router} /> */}
    </div>  
    
  );
}

export default App;
