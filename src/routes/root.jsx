import { Outlet } from "react-router-dom";
import Nav from "../nav";
import { useState } from "react";

export default function Root() {

    const markdownStyles = {
      // Headers
      h1: "text-4xl font-bold my-4 dark:text-green-dark",
      h2: "text-3xl font-semibold my-3 dark:text-yellow-dark",
      h3: "text-2xl font-medium my-3  dark:text-red-dark",
      h4: "text-2xl font-medium my-2 dark:text-blue-dark",
      h5: "text-2xl font-medium my-2 dark:text-indigo-dark",
      h6: "text-2xl font-medium my-2 dark:text-purple-dark",
  
      // Paragraph
      p: "my-2 text-xl dark:text-gray-300",
  
      // Links
      a: "text-blue-500 hover:underline dark:text-blue-400 hover:bg-gray-700",
  
      // Lists
      ul: "text-xl list-disc pl-5 my-2 dark:text-gray-300",
      ol: "text-xl list-decimal pl-5 my-2 dark:text-gray-300",
      li: "text-xl mb-1 dark:text-gray-300",
  
      // Blockquotes
      blockquote: "border-l-4 border-gray-300 pl-4 italic dark:border-gray-600 dark:text-gray-400",
  
      // Code
      code: "p-2 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-300",
      pre: "p-4 bg-gray-200 rounded-md overflow-x-auto dark:bg-gray-700 dark:text-gray-300",
  
      // Horizontal Rule
      hr: "my-4 border-t dark:border-gray-600",
  
      // Emphasis
      em: "italic dark:text-gray-300",
      strong: "font-bold dark:text-gray-300",
  
      // Images
      img: "my-4 rounded shadow-md dark:shadow-white",
  
      // Tables (Assuming you might use tables in your markdown)
      table: "w-full my-4 border-collapse dark:border-gray-600 dark:text-gray-300",
      th: "px-4 py-2 border dark:border-gray-600",
      td: "px-4 py-2 border dark:border-gray-600",
      thead: "bg-gray-200 dark:bg-gray-700",
      tbody: "bg-white dark:bg-gray-800"
  };

  const components = {
    h1: ({ node, ...props }) => <h1 className={markdownStyles.h1} {...props} />,
    h2: ({ node, ...props }) => <h2 className={markdownStyles.h2} {...props} />,
    h3: ({ node, ...props }) => <h3 className={markdownStyles.h3} {...props} />,
    h4: ({ node, ...props }) => <h4 className={markdownStyles.h4} {...props} />,
    h5: ({ node, ...props }) => <h5 className={markdownStyles.h5} {...props} />,
    h6: ({ node, ...props }) => <h6 className={markdownStyles.h6} {...props} />,
    p: ({ node, ...props }) => <p className={markdownStyles.p} {...props} />,
    a: ({ node, ...props }) => <a className={markdownStyles.a} {...props} />,
    ul: ({ node, ...props }) => <ul className={markdownStyles.ul} {...props} />,
    ol: ({ node, ...props }) => <ol className={markdownStyles.ol} {...props} />,
    li: ({ node, ...props }) => <li className={markdownStyles.li} {...props} />,
    blockquote: ({ node, ...props }) => <blockquote className={markdownStyles.blockquote} {...props} />,
    code: ({ node, ...props }) => <code className={markdownStyles.code} {...props} />,
    pre: ({ node, ...props }) => <pre className={markdownStyles.pre} {...props} />,
    hr: ({ node, ...props }) => <hr className={markdownStyles.hr} {...props} />,
    em: ({ node, ...props }) => <em className={markdownStyles.em} {...props} />,
    strong: ({ node, ...props }) => <strong className={markdownStyles.strong} {...props} />,
    img: ({ node, ...props }) => <img className={markdownStyles.img} {...props} />,
    table: ({ node, ...props }) => <table className={markdownStyles.table} {...props} />,
    th: ({ node, ...props }) => <th className={markdownStyles.th} {...props} />,
    td: ({ node, ...props }) => <td className={markdownStyles.td} {...props} />,
    thead: ({ node, ...props }) => <thead className={markdownStyles.thead} {...props} />,
    tbody: ({ node, ...props }) => <tbody className={markdownStyles.tbody} {...props} />,
  };  

  return (
    <div className="flex flex-col min-h-screen  dark:bg-gray-950 dark:text-white">
      {/*
            Nav component 
            Outlet - main content
            Footer
            */}
      <Nav />
      <div className="flex-grow">
        <Outlet context={components} />
      </div>
      <footer className="w-full bg-slate-300 dark:bg-black">
        <p className="mt-7 ml-5 mr-5 mb-3">
          © 2023 Structify. All Rights Reserved.
          <br />
          Developed By <a href="https://sean-ogrady.com/" target="_blank" className="dark:text-blue-400">Sean O'Grady</a>,
          <a href="https://www.linkedin.com/in/dennis-shin-dev/" target="_blank" className="dark:text-blue-400"> Dennis Shin</a>, and
          <a href="https://www.linkedin.com/in/tymurbondar/" target="_blank" className="dark:text-blue-400"> Tymur Bondar</a>
        </p>
      </footer>
    </div>
  );
}
