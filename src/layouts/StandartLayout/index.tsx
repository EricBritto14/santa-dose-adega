import { Outlet } from "react-router-dom";

import './style.sass';

import SideBar from "../../components/SideBar";

const DefaultLayout = () => {
    return (
        <div id="default-layout" >
            <SideBar/>
            <Outlet />
        </div>
    )
}

export default DefaultLayout;