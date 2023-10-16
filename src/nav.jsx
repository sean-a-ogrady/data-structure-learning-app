import { NavLink } from "react-router-dom";

export default function Nav(){
    return(
        <nav>
            <NavLink>
                Home {/* Image */}
            </NavLink>
            <NavLink>
                Data Structures
            </NavLink>
        </nav>
    );
};