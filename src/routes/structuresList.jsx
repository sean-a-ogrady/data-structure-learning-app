import { useState } from "react";
import { useLoaderData, Link, Outlet } from "react-router-dom";

export default function StructuresList(){
    const [structures, setStructures] = useState(useLoaderData());
    return(
        <div className="flex" >

            <ul className="ml-5 h-screen border-solid border-r-2 dark:text-complimentary-dark" >
                <h1 className="text-3xl text-center font-extrabold mr-5 pr-2 mb-3 dark:text-red-dark">Data Structures</h1>
                {structures.map(structure => (
                    <li className=' ml-1 text-2xl font-semibold text-left mr-5' key={structure.name}>
                        <Link to={`/data-structures/${structure.id}-${structure.name.replace(" ", "-")}`}>{structure.name}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};