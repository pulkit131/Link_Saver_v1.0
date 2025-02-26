import { deleteLink, updateLink } from "../utils/localStorageUtils";
import { useState } from "react";

function SavedLinks({ links, setLinks }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedLink, setEditedLink] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const handleDelete = (index) => {
    setLinks(deleteLink(index));
  };

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    alert("Link copied!");
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedLink(links[index].url);
    setEditedDescription(links[index].description);
  };

  const handleSaveEdit = () => {
    setLinks(updateLink(editingIndex, editedLink, editedDescription));
    setEditingIndex(null);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {links.map((item, index) => (
        <div
          key={index}
          className="w-72 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          {editingIndex === index ? (
            <>
              <input
                className="border p-2 w-full mb-2"
                value={editedLink}
                onChange={(e) => setEditedLink(e.target.value)}
              />
              <input
                className="border p-2 w-full mb-2"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handleSaveEdit}>
                Save
              </button>
            </>
          ) : (
            <>
              <p className="font-semibold">{item.description}</p>
              <a href={item.url} className="text-blue-500 break-words block" target="_blank" rel="noopener noreferrer">
                {item.url}
              </a>
              <div className="flex justify-between mt-3">
                <button className="text-green-500" onClick={() => handleCopy(item.url)}>Copy</button>
                <button className="text-blue-500" onClick={() => handleEdit(index)}>Edit</button>
                <button className="text-red-500" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default SavedLinks;
