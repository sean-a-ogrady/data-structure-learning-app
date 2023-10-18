import { useLoaderData } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function DataStructure({}) {
  const structure = useLoaderData();

  const markdownStyles = {
    h1: "text-2xl font-bold my-4",
    h2: "text-xl font-semibold my-3",
    p: "my-2",
    a: "text-blue-500 hover:underline",
    // ... add more styles for other HTML elements produced by markdown
  };

  return (
    <div className="w-fit flex-auto ml-10">
      <h1 className="text-5xl font-extrabold text-slate-600">{structure.name}</h1>
      <ReactMarkdown
        components={
          {
            h1: ({node, ...props}) => <h1 className={markdownStyles.h1} {...props} />,
            // h2: ({node, ...props}) => <h2 className={markdownStyles.h2} {...props} />,
            // p: ({node, ...props}) => <p className={markdownStyles.p} {...props} />,
            // a: ({node, ...props}) => <a className={markdownStyles.a} {...props} />,
            // ... add more component mappings for other markdown elements
          }
        }
      >
        {structure.content}
      </ReactMarkdown>
    </div>
  );
}