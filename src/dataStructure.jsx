import { useLoaderData, useOutletContext } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function DataStructure() {
  const structure = useLoaderData();
  const components = useOutletContext();

  return (
    <div className="w-full overflow-hidden flex-auto ml-10 mr-10">
      <ReactMarkdown components={components}>
        {structure.content}
      </ReactMarkdown>
    </div>
  );
}