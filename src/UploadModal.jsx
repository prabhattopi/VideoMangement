/* eslint-disable react/prop-types */
import  { useState } from "react";
import { X } from "lucide-react";

const UploadModal = ({ closeModal, addVideo }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    thumbnail: null,
    videoFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(form);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Upload Video</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              onChange={handleChange}
              accept="image/*"
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Video File</label>
            <input
              type="file"
              name="videoFile"
              onChange={handleChange}
              accept="video/*"
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
