import { useState } from "react";

export default function AddStructureForm({ url }) {
  const [formData, setFormData] = useState({ name: "", content: "" });

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
        content: formData.content.replace(/\n/g, "\\n"),
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
    <form className="w-full h-screen max-w-4x1 mx-auto p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        type="text"
        placeholder="Content"
        name="content"
        value={formData.content}
        onChange={handleInputChange}
        className="w-full h-4/5 p-2 mb-2 border rounded resize-y"
      />
      <div className="flex justify-end">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-700">Submit</button>
      </div>
    </form>
  );
}
