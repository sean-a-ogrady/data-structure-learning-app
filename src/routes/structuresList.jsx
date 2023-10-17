import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import DataStructure from "../dataStructure";

export default function StructuresList(){
    const [structures, setStructures] = useState(useLoaderData());
    return(
        <div>
            <ul className="list-disc" >
                {structures.map(structure => (
                    <li key={structure.name}>
                        <Link to={`/data-structures/${structure.name.replace(" ", "-")}`}>{structure.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};