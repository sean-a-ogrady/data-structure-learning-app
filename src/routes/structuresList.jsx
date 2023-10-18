import { useState } from "react";
import { useLoaderData, Link, Outlet } from "react-router-dom";

export default function StructuresList(){
    const [structures, setStructures] = useState(useLoaderData());
    return(
        <div className="flex mt-16" >

            <ul className="flex-none ml-6 border-solid border-2 rounded border-slate-500  h-min" >
                <h1 className="text-xl text-center font-extrabold pl-2 pr-2">Data Structures</h1>
                {structures.map(structure => (
                    <li className='text-slate-950 text-lg text-center bg-slate-300' key={structure.name}>
                        <Link to={`/data-structures/${structure.id}-${structure.name.replace(" ", "-")}`}>{structure.name}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};