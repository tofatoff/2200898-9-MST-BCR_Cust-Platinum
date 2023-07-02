import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "jquery/dist/jquery.js";
import "../App.css";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Home from "../pages/Home";
import UnderMaintenance from "../pages/UnderMaintenance";
import Search from "../pages/Search";
import Detail from "../pages/Detail/index";
import ResultCar from "../pages/Search/SearchResult/index";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Payment from "../pages/Payment";
import PaymentConfirm from "../pages/PaymentConfirm";
import Uploadpayment from "../pages/PaymentUpload";
import Eticket from "../pages/Eticket";

const Routes = () => {
  const { isAuthenticated } = useSelector((state) => state.authStore);

  return [
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/", element: <Home /> },
    {
      path: "search",
      element: isAuthenticated ? <Search /> : <Navigate to="/login" />,
    },
    {
      path: "/search-result",
      element: isAuthenticated ? <ResultCar /> : <Navigate to="/login" />,
    },
    {
      path: "/detail/:id",
      element: isAuthenticated ? <Detail /> : <Navigate to="/login" />,
    },
    {
      path: "/payment/:id",
      element: isAuthenticated ? <Payment /> : <Navigate to="/login" />,
    },
    {
      path: "/paymentconfirm/:id",
      element: isAuthenticated ? <PaymentConfirm /> : <Navigate to="/login" />,
    },
    {
      path: "/paymentupload/:id",
      element: isAuthenticated ? <Uploadpayment /> : <Navigate to="/login" />,
    },
    {
      path: "/*",
      element: <UnderMaintenance />,
    },
    {
      path: "/eticket/:id",
      element: isAuthenticated ? <Eticket /> : <Navigate to="/login" />,
    },
    // { path: "/viewerPdf", element: <ViewerPDF /> },
  ];
};

export default Routes;
