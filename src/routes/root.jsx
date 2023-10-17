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
            {/* <div className="mx-auto w-fit mt-10" > */}
                <Outlet />
            {/* </div> */}
            
        </div>
    );
};