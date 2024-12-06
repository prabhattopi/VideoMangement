/* eslint-disable react/prop-types */

import { X } from "lucide-react";

const VideoModal = ({ video, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-xl relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4">{video.title}</h2>
        <video controls className="w-full rounded">
          <source src={URL.createObjectURL(video.videoFile)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
