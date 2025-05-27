import { Outlet } from "react-router-dom";
import Navbar from "./nav/Navbar";

const MainLayout:React.FC=()=>{

    return(<div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>)
}

export default MainLayout;