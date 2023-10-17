import { Outlet } from "react-router-dom";
import Nav from "../nav";

export default function Root(){
    return(
        <div>
            {/*
            Nav component 
            Outlet - main content
            Footer
            */}
            <Nav/>

            <Outlet />
            
        </div>
    );
};