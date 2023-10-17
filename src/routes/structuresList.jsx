import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DataStructure from "../dataStructure";

export default function StructuresList(){
    const [structures, setStructures] = useState(useLoaderData());
    return(
        <div>
            <ul className="list-disc" >
                <li><DataStructure /></li>
                <li><DataStructure /></li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    );
};