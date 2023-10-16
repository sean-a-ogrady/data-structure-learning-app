import { NavLink } from "react-router-dom";

export default function Nav(){
    return(
        <nav>
            <NavLink to="/">
                Home {/* Image */}
            </NavLink>
            <NavLink to="data-structures">
                Data Structures
            </NavLink>
            <NavLink to="add">
                Add Structure
            </NavLink>
        </nav>
    );
};