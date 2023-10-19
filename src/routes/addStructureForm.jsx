import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useOutletContext } from "react-router-dom";

export default function AddStructureForm({ url }) {
  const [formData, setFormData] = useState({ name: "", content: "" });
  const components = useOutletContext();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // let originalContent = retrievedContent.replace(/\\n/g, "\n");
      body: JSON.stringify({
        name: formData.name,
        content: formData.content
          .split("\n")
          .map((line) => (line.startsWith("#") ? line : line + "  \n\u200B"))
          .join("\n"),
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error POSTing");
        return response.json();
      })
      .then(() => setFormData(() => ({ name: "", content: "" })))
      .catch(console.log);
    alert("New data structure submitted!");
  }

  return (
    <div
      className="flex mx-auto p-4"
      style={{ height: "90vh", width: "100vw" }}
    >
      <form className="w-1/2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 mb-2 border rounded bg-transparent dark:border-white border-black"
        />
        <textarea
          type="text"
          placeholder="Content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          className="w-full h-4/5 p-2 mb-2 border rounded resize-y bg-transparent dark:border-white border-black"
        />
        <div className="flex justify-start">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
      <div
        className="w-1/2 p-4 overflow-y-auto mr-4 ml-4"
        style={{ height: "75vh" }}
      >
        <ReactMarkdown components={components}>
          {formData.content
            .split("\n")
            .map((line) => (line.startsWith("#") ? line : line + "  \n\u200B"))
            .join("\n")}
        </ReactMarkdown>
      </div>
    </div>
  );
}
