import { createHashRouter } from "react-router-dom";

import StandartLayout from './layouts/StandartLayout';

import Login from "@Pages/Login";
import HomePage from './pages/Home';
import ProductList from "./pages/ProductList";
import ProductForm from "./pages/ProductForm";
import UserList from "./pages/UserList";
import UserForm from "@Pages/UserForm";
import ChangePassword from "@Pages/ChangePassword";
import ProfileForm from "@Pages/ProfileForm";
import DailySells from "@Pages/DailySells/Index";
import MonthlySells from "@Pages/MonthlySells";

const routers = createHashRouter([
    {
        path: "",
        element: <StandartLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/daily-sells",
                element: <DailySells/>
            },
            {
                path:"/monthly-sells",
                element: <MonthlySells/>
            },
            {
                path: "/product-list",
                element: <ProductList/>
            },
            {
                path: "/product-form",
                element: <ProductForm/>
            },
            {
                path: "/product-form/:id",
                element: <ProductForm/>
            },
            {
                path: "/user-list",
                element: <UserList/>
            },
            {
                path: "/user-form",
                element: <UserForm/>
            },
            {
                path: "/user-form/:id",
                element: <UserForm/>
            },
            {
                path: "/change-password",
                element: <ChangePassword/>
            },
            {
                path: "/profile-form",
                element: <ProfileForm/>
            }
        ]
    },
    {
        path: "",
        element: null,
        children: [
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
])

export default routers;