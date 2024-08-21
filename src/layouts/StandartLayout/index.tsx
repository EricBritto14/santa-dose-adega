import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import './style.sass';

import SideBar from "../../components/SideBar";

const DefaultLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
    }, [location]);

    return (
        <div id="default-layout" >
            <SideBar/>
            <Outlet />
        </div>
    )
}

export default DefaultLayout;