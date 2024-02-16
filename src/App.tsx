import {  RouterProvider, createBrowserRouter } from "react-router-dom"

import "./css/App.scss"
import "./css/SignUp.scss"
import Signup from './components/auth/SignUp';
import Login from "./components/auth/Login";
import DashBoard from './components/dashboard/DashBoard';

// type RouterType={
//   path:string;
//   element:React.ReactNode;
// }

const App = () => {



  const router=createBrowserRouter([
    {
      path:"/",
      element: <Login></Login>,
    },
    {
      path:"/signup",
      element: <Signup></Signup>
    },{
      path:"/dashboard",
      element: <DashBoard/>
    }
  ]);
  return (
    <RouterProvider router={router}> 
       
    </RouterProvider>
  )
}

export default App
