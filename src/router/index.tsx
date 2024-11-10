import React from "react";
import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import SimpleMenu from "../layouts/SimpleMenu";
import TopMenu from "../layouts/TopMenu";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Login from "../pages/login/Login";
import Artisons from "../pages/Artisons/Artisons";
import ErrorPage from '../pages/ErrorPage'
import Clients from "../pages/Clients/Clients";
import Albume from "../pages/AbonnementAlbume/Albume";
function Router() {
  const islogin = localStorage.getItem("isConnecte");
  const routes = [

    {
      path: "/",
      element: <Login />,
    },


    {
      path: "/acceuil",
      element: islogin ? (<SideMenu />):(<ErrorPage/>) ,
      children: [
        {
          path: "/acceuil",
          element: islogin ? (<Page1 />):(<ErrorPage/>)
      
        },
     
        {
          path: "Artisons",
          element: islogin ? (<Artisons />):(<ErrorPage/>)
      
        },
        {
          path: "Client",
          element: islogin ? (<Clients />):(<ErrorPage/>)
      
        },
        {
          path: "page-2",
          element: islogin ? (<Page2 />):(<ErrorPage/>)
      
        },
        {
          path: "Albume",
          element: islogin ? (<Albume />):(<ErrorPage/>)
      
        },

        
      ],
    },
    {
      path: "/simple-menu",
      element: islogin ? (<SimpleMenu />):(<ErrorPage/>) ,

      children: [
        {
          path: "page-1",
          element: islogin ? (<Page1 />):(<ErrorPage/>)
    
        },
        {
          path: "page-2",
          element: islogin ? (<Page2 />):(<ErrorPage/>)
      
        },
        
        {
          path: "Artisons",
          element: islogin ? (<Artisons />):(<ErrorPage/>)
      
        },
        {
          path: "Client",
          element: islogin ? (<Clients />):(<ErrorPage/>)
      
        },
        {
          path: "Albume",
          element: islogin ? (<Albume />):(<ErrorPage/>)
      
        },
      ],
    },
    {
      path: "/top-menu",
      element: islogin ? (<TopMenu />):(<ErrorPage/>) ,

      children: [
        {
          path: "page-1",
          element: islogin ? (<Page1 />):(<ErrorPage/>)
    
        },
        {
          path: "page-2",
          element: islogin ? (<Page2 />):(<ErrorPage/>)
      
        },

        {
          path: "Artisons",
          element: islogin ? (<Artisons />):(<ErrorPage/>)
      
        },
        {
          path: "Client",
          element: islogin ? (<Clients />):(<ErrorPage/>)
      
        },
        {
          path: "Albume",
          element: islogin ? (<Albume />):(<ErrorPage/>)
      
        },
       
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;
