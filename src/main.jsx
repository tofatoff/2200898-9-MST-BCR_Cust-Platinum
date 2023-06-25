import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import UnderMaintenance from "./pages/UnderMaintenance";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "reactstrap";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import SearchResult from "./pages/Search/SearchResult";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import PaymentConfirm from "./pages/PaymentConfirm";
import PaymentUpload from "./pages/PaymentUpload";
import { store } from "./store";
import { Provider } from "react-redux";
import PdfViewer from "./components/Eticket/PdfViewer";
import Eticket from "./pages/Eticket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/search-result",
    element: <SearchResult />,
  },
  {
    path: "/detail/:carId",
    element: <Detail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/paymentconfirm",
    element: <PaymentConfirm />,
  },
  {
    path: "/paymentupload",
    element: <PaymentUpload />,
  },
  {
    path: "/*",
    element: <UnderMaintenance />,
  },
  {
    path: "/eticket",
    element: <Eticket/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
