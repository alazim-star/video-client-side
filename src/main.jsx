import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Mainlayout from './Page/Mainlayout';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
import About from './Page/About';
import GoogleMeetLanding from './HomePageShow/GoogleMeetLanding';
import VideoCallApp from './HomePageShow/VideoCallApp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/googleMeetLanding",
        element: <GoogleMeetLanding></GoogleMeetLanding>,
      },
      

    ]
  },
  {
    path: "/videoCalling",
    element:<VideoCallApp></VideoCallApp>,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
