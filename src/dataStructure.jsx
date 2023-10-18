import { useLoaderData } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function DataStructure({}) {
  const structure = useLoaderData();

  const markdownStyles = {
    h1: "text-3xl font-bold my-4 dark:text-red-dark",
    h2: "text-xl font-semibold my-3",
    p: "my-2 text-xl",
    a: "text-blue-500 hover:underline",
    // ... add more styles for other HTML elements produced by markdown
  };

  return (
    <div className="w-fit flex-auto ml-10">
      <h1 className="text-6xl font-extrabold text-slate-600 dark:text-green-dark">{structure.name}</h1>
      <ReactMarkdown
        components={
          {
            h1: ({node, ...props}) => <h1 className={markdownStyles.h1} {...props} />,
            // h2: ({node, ...props}) => <h2 className={markdownStyles.h2} {...props} />,
            p: ({node, ...props}) => <p className={markdownStyles.p} {...props} />,
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