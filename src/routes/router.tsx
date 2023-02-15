import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Daily from "./Daily";
import Home from "./Home";
import Monthly from "./Monthly";
import Weekly from "./Weekly";
import Yearly from "./Yearly";

const router = createBrowserRouter([
    {
        path:"/",
        element : <App />,
        children : [
            {
                path : "",
                element : <Home></Home>
            },
            {
                path : 'dashboard',
                element : <h1>Dashboard</h1>
            },
            {
                path : 'yearly',
                element : <Yearly></Yearly>
            },
            {
                path : 'monthly',
                element : <Monthly></Monthly>
            },
            {
                path : 'weekly',
                element : <Weekly></Weekly>
            },
            {
                path : 'daily',
                element : <Daily></Daily>
            }
        ]
    }
])


export {router}