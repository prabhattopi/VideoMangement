/* eslint-disable react/prop-types */

import { Play } from "lucide-react";

const VideoList = ({ videos, openVideoModal }) => {
  return (
    <ul className="space-y-4 mt-4">
      {videos.map((video) => (
        <li
          key={video.id}
          className="border p-4 rounded flex items-center shadow-lg"
        >
          <img
            src={URL.createObjectURL(video.thumbnail)}
            alt="Thumbnail"
            className="w-20 h-20 object-cover mr-4 rounded"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{video.title}</h3>
            <p className="text-sm text-gray-600">{video.description}</p>
          </div>
          <button
            onClick={() => openVideoModal(video)}
            className="text-blue-500 hover:text-blue-700 flex items-center space-x-1"
          >
            <Play size={24} />
            <span>Play</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default VideoList;
