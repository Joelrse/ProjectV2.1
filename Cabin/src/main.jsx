import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from './routes/about';
import Photos from './routes/photos';
import Root from './routes/root'
import "./index.css";
import Error from './error';
import SignUp from './routes/signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "photos",
        element: <Photos />
      },
      {
        path: "signup",
        element: <SignUp />
      }


    ]
  
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>
);


