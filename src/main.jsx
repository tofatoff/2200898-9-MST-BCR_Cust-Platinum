import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import UnderMaintenance from './pages/UnderMaintenance';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Container } from 'reactstrap';
import Search from './pages/Search';
import Detail from './pages/Detail';
import SearchResult from './pages/Search/SearchResult';

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
    path: "/*",
    element: <UnderMaintenance />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
