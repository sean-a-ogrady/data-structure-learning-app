import { useLoaderData } from "react-router-dom";

export default function DataStructure({}) {
  const structure = useLoaderData();

  return (
    <div className="w-fit">
      <h1 className="text-xl font-extrabold" >Work</h1>
    </div>
  );
}
