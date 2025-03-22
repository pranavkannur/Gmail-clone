import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Mail from './components/Mail';
import Index from './components/Index';
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      },
    ]
  }
]);

function AppContent() {
  const composeOpen = useSelector(state => state.mail.composeOpen);
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <RouterProvider router={router} />
      {composeOpen && (
        <div className="fixed bottom-0 right-12">
          <SendMail />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;