import { useState } from "react";
import { useLoaderData, Link, Outlet } from "react-router-dom";

export default function StructuresList(){
    const [structures, setStructures] = useState(useLoaderData());
    return(
        <div>
            <ul className="list-disc" >
                {structures.map(structure => (
                    <li key={structure.name}>
                        <Link to={`/data-structures/${structure.id}-${structure.name.replace(" ", "-")}`}>{structure.name}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};